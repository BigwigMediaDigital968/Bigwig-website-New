"use client";

import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Eye, Edit3, Mail, Phone, Trash2, CheckCircle, Clock } from "lucide-react";
import { Badge, EmptyState, IconAction, PageHeader, Pagination, Panel, table } from "../../../../components/admin/AdminUI";
import { Modal } from "../../../../components/blog-editor/ui";

type LeadStatus = "NEW" | "CONTACTED" | "FOLLOWUP" | "COMPLETED" | "REJECTED";

interface ContactRequest {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
  services?: string[];
  verified?: boolean;
  status: LeadStatus;
  createdAt: string;
  updatedAt?: string;
  __v?: number;
}

const STATUS_OPTIONS: LeadStatus[] = [
  "NEW",
  "CONTACTED",
  "FOLLOWUP",
  "COMPLETED",
  "REJECTED",
];

const STATUS_TONES: Record<LeadStatus, "blue" | "green" | "amber" | "purple" | "red"> = {
  NEW: "blue",
  CONTACTED: "purple",
  FOLLOWUP: "amber",
  COMPLETED: "green",
  REJECTED: "red",
};

const ITEMS_PER_PAGE = 20;

const AdminLead = () => {
  const [contacts, setContacts] = useState<ContactRequest[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<ContactRequest[]>([]);
  
  // Filters
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  // Selection & Action Modals
  const [selectedContact, setSelectedContact] = useState<ContactRequest | null>(null);
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);

  // Delete State
  const [deleteModal, setDeleteModal] = useState(false);
  const [leadToDelete, setLeadToDelete] = useState<string | null>(null);
  const [loadingDelete, setLoadingDelete] = useState(false);

  // Edit State
  const [editModal, setEditModal] = useState(false);
  const [editingLead, setEditingLead] = useState<ContactRequest | null>(null);
  const [loadingEdit, setLoadingEdit] = useState(false);
  
  // Form values for editing
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    servicesStr: "",
    status: "NEW" as LeadStatus,
  });

  // Fetch all leads
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/lead/all`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = (Array.isArray(data) ? data : []).sort(
          (a: ContactRequest, b: ContactRequest) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setContacts(sorted);
        setFilteredContacts(sorted);
      })
      .catch((err) => console.error("Error fetching contact requests:", err));
  }, []);

  // Filter leads by Date and Status
  useEffect(() => {
    let filtered = [...contacts];

    if (selectedDate) {
      filtered = filtered.filter((c) =>
        new Date(c.createdAt).toISOString().startsWith(selectedDate)
      );
    }

    if (selectedStatusFilter) {
      filtered = filtered.filter((c) => c.status === selectedStatusFilter);
    }

    setFilteredContacts(filtered);
    setCurrentPage(1);
  }, [selectedDate, selectedStatusFilter, contacts]);

  const totalPages = Math.ceil(filteredContacts.length / ITEMS_PER_PAGE);
  const currentContacts = filteredContacts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Quick Status Update Handler
  const handleStatusChange = async (id: string, newStatus: LeadStatus) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/lead/${id}/status`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success(`Status updated to ${newStatus}`);
        setContacts((prev) =>
          prev.map((c) => (c._id === id ? { ...c, status: newStatus } : c))
        );
        if (selectedContact?._id === id) {
          setSelectedContact((prev) => (prev ? { ...prev, status: newStatus } : null));
        }
      } else {
        toast.error(data.message || "Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  // Open Edit Modal & prep form
  const openEditModal = (contact: ContactRequest) => {
    setEditingLead(contact);
    setEditForm({
      name: contact.name || "",
      email: contact.email || "",
      phone: contact.phone || "",
      message: contact.message || "",
      servicesStr: (contact.services || []).join(", "),
      status: contact.status || "NEW",
    });
    setEditModal(true);
  };

  // Submit Edit Lead
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingLead) return;

    try {
      setLoadingEdit(true);

      const servicesArray = editForm.servicesStr
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/lead/${editingLead._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: editForm.name,
            email: editForm.email,
            phone: editForm.phone,
            message: editForm.message,
            services: servicesArray,
            status: editForm.status,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Lead updated successfully");

        const updatedLead = data.data;

        setContacts((prev) =>
          prev.map((c) => (c._id === editingLead._id ? updatedLead : c))
        );

        if (selectedContact?._id === editingLead._id) {
          setSelectedContact(updatedLead);
        }

        setEditModal(false);
        setEditingLead(null);
      } else {
        toast.error(data.message || "Failed to update lead");
      }
    } catch (error) {
      console.error("Edit Lead Error:", error);
      toast.error("Error updating lead details");
    } finally {
      setLoadingEdit(false);
    }
  };

  // Single Delete
  const handleDeleteLead = async () => {
    if (!leadToDelete) return;

    try {
      setLoadingDelete(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/lead/${leadToDelete}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Lead deleted successfully");
        setContacts((prev) => prev.filter((lead) => lead._id !== leadToDelete));
        if (selectedContact?._id === leadToDelete) {
          setSelectedContact(null);
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete lead");
    } finally {
      setDeleteModal(false);
      setLeadToDelete(null);
      setLoadingDelete(false);
    }
  };

  // Bulk Delete
  const handleBulkDelete = async () => {
    if (!selectedLeads.length) return;

    if (!window.confirm(`Delete ${selectedLeads.length} selected leads?`))
      return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/lead/bulk/delete`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ids: selectedLeads,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success(data.message);
        setContacts((prev) =>
          prev.filter((lead) => !selectedLeads.includes(lead._id))
        );
        setSelectedLeads([]);
      }
    } catch (error) {
      toast.error("Bulk delete failed");
    }
  };

  const allOnPageSelected =
    currentContacts.length > 0 &&
    currentContacts.every((lead) => selectedLeads.includes(lead._id));

  return (
    <div>
      <PageHeader
        title="Leads"
        description={`${filteredContacts.length} ${selectedDate || selectedStatusFilter ? "filtered" : "total"} · newest first`}
        actions={
          <div className="flex flex-wrap items-center gap-3">
            {/* Status Filter */}
            <select
              value={selectedStatusFilter}
              onChange={(e) => setSelectedStatusFilter(e.target.value)}
              className="bw-input w-auto text-sm [color-scheme:dark] cursor-pointer"
            >
              <option value="">All Statuses</option>
              {STATUS_OPTIONS.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>

            {/* Date Filter */}
            <div className="flex items-center gap-2">
              <input
                id="filter-date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bw-input w-auto text-sm [color-scheme:dark] cursor-pointer"
              />
              {(selectedDate || selectedStatusFilter) && (
                <button
                  type="button"
                  className="bw-btn-sm cursor-pointer"
                  onClick={() => {
                    setSelectedDate("");
                    setSelectedStatusFilter("");
                  }}
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        }
      />

      {filteredContacts.length === 0 ? (
        <EmptyState
          title="No leads found"
          description={
            selectedDate || selectedStatusFilter
              ? "No leads match the selected filter parameters."
              : "New enquiries from the website will show up here."
          }
        />
      ) : (
        <>
          {selectedLeads.length > 0 && (
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm">
              <span className="text-red-100">{selectedLeads.length} lead(s) selected</span>
              <button onClick={handleBulkDelete} className="bw-btn-primary bg-red-600 hover:bg-red-700 cursor-pointer">
                <Trash2 size={15} /> Delete selected
              </button>
            </div>
          )}

          <Panel bodyClassName="">
            <div className={table.wrap}>
              <table className={`${table.table} min-w-[880px]`}>
                <thead className={table.thead}>
                  <tr>
                    <th className={`${table.th} w-10`}>
                      <input
                        type="checkbox"
                        aria-label="Select all on this page"
                        className="accent-[#54acbf] cursor-pointer"
                        checked={allOnPageSelected}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedLeads(currentContacts.map((lead) => lead._id));
                          } else {
                            setSelectedLeads([]);
                          }
                        }}
                      />
                    </th>
                    <th className={table.th}>Name</th>
                    <th className={table.th}>Email</th>
                    <th className={table.th}>Phone</th>
                    <th className={table.th}>Status</th>
                    <th className={table.th}>Received</th>
                    <th className={`${table.th} text-right`}>Actions</th>
                  </tr>
                </thead>

                <tbody className={table.tbody}>
                  {currentContacts.map((contact) => {
                    const checked = selectedLeads.includes(contact._id);
                    const currentStatus = contact.status || "NEW";

                    return (
                      <tr key={contact._id} className={`${table.tr} ${checked ? "bg-[#26658c]/15" : ""}`}>
                        <td className={table.td}>
                          <input
                            type="checkbox"
                            aria-label={`Select ${contact.name}`}
                            className="accent-[#54acbf] cursor-pointer"
                            checked={checked}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedLeads((prev) => [...prev, contact._id]);
                              } else {
                                setSelectedLeads((prev) => prev.filter((id) => id !== contact._id));
                              }
                            }}
                          />
                        </td>

                        <td className={table.td}>
                          <div className="flex items-center gap-3">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#26658c]/40 text-xs font-semibold uppercase text-[#a7ebf2]">
                              {contact.name?.trim()?.[0] || "?"}
                            </span>
                            <span className="font-medium text-white">{contact.name}</span>
                          </div>
                        </td>

                        <td className={table.td}>
                          <a href={`mailto:${contact.email}`} className="text-[#a7ebf2] hover:underline">
                            {contact.email}
                          </a>
                        </td>

                        <td className={`${table.td} whitespace-nowrap`}>
                          <a href={`tel:${contact.phone}`} className="hover:text-[#a7ebf2]">
                            {contact.phone}
                          </a>
                        </td>

                        {/* Quick Status Select */}
                        <td className={table.td}>
                          <select
                            value={currentStatus}
                            onChange={(e) =>
                              handleStatusChange(contact._id, e.target.value as LeadStatus)
                            }
                            className="rounded border border-white/10 bg-black/40 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-white [color-scheme:dark] focus:outline-none focus:ring-1 focus:ring-[#54acbf] cursor-pointer"
                          >
                            {STATUS_OPTIONS.map((st) => (
                              <option key={st} value={st}>
                                {st}
                              </option>
                            ))}
                          </select>
                        </td>

                        <td className={`${table.td} whitespace-nowrap text-white/60`}>
                          {new Date(contact.createdAt).toLocaleString("en-GB", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: false,
                          })}
                        </td>

                        <td className={table.td}>
                          <div className="flex items-center justify-end gap-1">
                            <IconAction label="View details" onClick={() => setSelectedContact(contact)}>
                              <Eye className="cursor-pointer" size={16} />
                            </IconAction>

                            <IconAction label="Edit lead" onClick={() => openEditModal(contact)}>
                              <Edit3 className="cursor-pointer" size={16} />
                            </IconAction>

                            <IconAction
                              label="Delete lead"
                              danger
                              onClick={() => {
                                setLeadToDelete(contact._id);
                                setDeleteModal(true);
                              }}
                            >
                              <Trash2 className="cursor-pointer" size={16} />
                            </IconAction>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Panel>

          <div className="mt-5">
            <Pagination page={currentPage} totalPages={totalPages} onChange={setCurrentPage} />
          </div>
        </>
      )}

      {/* View Lead Details Modal */}
      {selectedContact && (
        <Modal
          title="Lead details"
          width={520}
          onClose={() => setSelectedContact(null)}
          footer={
            <div className="flex w-full justify-between items-center">
              <button
                className="bw-btn-secondary flex items-center gap-2 cursor-pointer"
                onClick={() => {
                  const leadToEdit = selectedContact;
                  setSelectedContact(null);
                  openEditModal(leadToEdit);
                }}
              >
                <Edit3 size={15} /> Edit Lead
              </button>
              <button className="bw-btn-ghost cursor-pointer" onClick={() => setSelectedContact(null)}>
                Close
              </button>
            </div>
          }
        >
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#26658c]/40 text-base font-semibold uppercase text-[#a7ebf2]">
                {selectedContact.name?.trim()?.[0] || "?"}
              </span>
              <div>
                <p className="font-semibold text-white">{selectedContact.name}</p>
                <p className="text-xs text-white/50">
                  {new Date(selectedContact.createdAt).toLocaleString("en-GB")}
                </p>
              </div>
            </div>
            <Badge tone={STATUS_TONES[selectedContact.status || "NEW"]}>
              {selectedContact.status || "NEW"}
            </Badge>
          </div>

          <dl className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-white/40" />
              <a href={`mailto:${selectedContact.email}`} className="text-[#a7ebf2] hover:underline">
                {selectedContact.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-white/40" />
              <a href={`tel:${selectedContact.phone}`} className="text-white/85 hover:text-[#a7ebf2]">
                {selectedContact.phone}
              </a>
            </div>
          </dl>

          <div className="mt-5">
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-white/50">Services</p>
            <div className="flex flex-wrap gap-2">
              {selectedContact.services?.length ? (
                selectedContact.services.map((service: string, idx: number) => (
                  <Badge key={idx} tone="blue">
                    {service}
                  </Badge>
                ))
              ) : (
                <span className="text-sm text-white/40">None selected</span>
              )}
            </div>
          </div>

          <div className="mt-5">
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-white/50">Message</p>
            <p className="whitespace-pre-wrap rounded-lg border border-white/10 bg-white/[0.03] p-3 text-sm text-white/80">
              {selectedContact.message || <span className="text-white/40">No message</span>}
            </p>
          </div>
        </Modal>
      )}

      {/* Edit Lead Modal */}
      {editModal && editingLead && (
        <Modal
          title="Edit Lead Information"
          width={540}
          onClose={() => {
            setEditModal(false);
            setEditingLead(null);
          }}
          footer={
            <>
              <button
                type="button"
                className="bw-btn-ghost cursor-pointer"
                onClick={() => {
                  setEditModal(false);
                  setEditingLead(null);
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={loadingEdit}
                onClick={handleEditSubmit}
                className="bw-btn-primary cursor-pointer"
              >
                {loadingEdit ? "Saving..." : "Save Changes"}
              </button>
            </>
          }
        >
          <form onSubmit={handleEditSubmit} className="space-y-4 text-sm">
            <div>
              <label className="mb-1 block text-xs font-medium text-white/70">Name</label>
              <input
                type="text"
                required
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                className="bw-input w-full"
              />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-white/70">Email</label>
                <input
                  type="email"
                  required
                  value={editForm.email}
                  onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                  className="bw-input w-full"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-white/70">Phone</label>
                <input
                  type="text"
                  required
                  value={editForm.phone}
                  onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                  className="bw-input w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-white/70">Status</label>
                <select
                  value={editForm.status}
                  onChange={(e) =>
                    setEditForm({ ...editForm, status: e.target.value as LeadStatus })
                  }
                  className="bw-input w-full [color-scheme:dark]"
                >
                  {STATUS_OPTIONS.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-white/70">
                  Services (Comma-separated)
                </label>
                <input
                  type="text"
                  value={editForm.servicesStr}
                  onChange={(e) => setEditForm({ ...editForm, servicesStr: e.target.value })}
                  placeholder="SEO, Web Development"
                  className="bw-input w-full"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-white/70">Message</label>
              <textarea
                rows={3}
                value={editForm.message}
                onChange={(e) => setEditForm({ ...editForm, message: e.target.value })}
                className="bw-input w-full"
              />
            </div>
          </form>
        </Modal>
      )}

      {/* Delete Lead Modal */}
      {deleteModal && (
        <Modal
          title="Delete lead"
          width={440}
          onClose={() => {
            setDeleteModal(false);
            setLeadToDelete(null);
          }}
          footer={
            <>
              <button
                onClick={() => {
                  setDeleteModal(false);
                  setLeadToDelete(null);
                }}
                className="bw-btn-ghost cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteLead}
                disabled={loadingDelete}
                className="bw-btn-primary bg-red-600 hover:bg-red-700 cursor-pointer"
              >
                {loadingDelete ? "Deleting..." : "Delete lead"}
              </button>
            </>
          }
        >
          <p className="text-sm text-white/70">
            Are you sure you want to delete this lead? This action cannot be undone.
          </p>
        </Modal>
      )}

      <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />
    </div>
  );
};

export default AdminLead;