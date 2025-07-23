// Legacy column definitions
// This file is referenced in index.html but was missing
// The main script handles the case where window.oldColumnDefs is undefined
window.oldColumnDefs = [
  {
    field: 'action', // <-- Your explicit 'action' column
    headerName: 'Actions123',
    width: 80,
    cellRenderer: ActionMenuCellRenderer,
    suppressHeaderMenuButton: true,
    suppressToolPanel: true,
    sortable: false,
    filter: false,
    resizable: false,
    editable: false,
  },
];
