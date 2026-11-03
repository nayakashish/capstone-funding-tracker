// This runs once for every row in the table.
//   row          the table row (<tr>)
//   cell         the deadline cell (<td>)
//   opportunity  the row's data, including days_left from the server
function showDeadline(row, cell, opportunity) {
  // The Deadline cell was just added, so this new cell lands right after it.
  const dueCell = addCell(row, "");
  const days = opportunity.days_left;

  // More than 7 days away: nothing to flag.
  if (days > 7) {
    return;
  }

  const badge = document.createElement("span");
  badge.className = "status " + (days < 0 ? "deadline-overdue" : "deadline-soon");
  badge.textContent = deadlineLabel(days);
  dueCell.appendChild(badge);
}

// Turns days_left into the words on the badge.
function deadlineLabel(days) {
  if (days < 0) {
    return "Overdue";
  }
  if (days === 0) {
    return "Due today";
  }
  if (days === 1) {
    return "Due in 1 day";
  }
  return "Due in " + days + " days";
}
