// $ is a shortcut to the jQuery library, and utility methods it provides
// $('.awesome_class') is a query on DOM elements in the HTML, in this case with the class 'awesome_class'
// $('<h1>') is a newly created DOM object, not yet in the HTML, note the angle brackets.
ContactTable = {
  draw: function(contacts) {
    // create a DOM object
    table = $('<table>');
    // add a class
    table.addClass('contact_table');
    //Add the HTML contents
    // A standard header row
    table.append(this.header_row());
    // Iterate through the contacts
    $.each(
      contacts,
      function(index, contact) {
        // For each one, get the DOM returned by the data_row function
        table.append(ContactTable.data_row(contact));
      }
    );
    // Append to a known element in the HTML document
    console.log(table);
    $('#placeholder').html(table);
  },
  
  header_row: function() {
    // make DOM
    row = $('<tr>');
    row.addClass('header_row');
    // Append cells made by header_cell function
    row.append(this.header_cell('First'));
    row.append(this.header_cell('Last'));
    row.append(this.header_cell('Address'));
    // return so it can be used up in the draw method
    return row;
  },
  
  header_cell: function(content) {
    // Make DOM
    cell = $('<th>');
    // Add content
    cell.html(content);
    // return for use in header_row
    return cell;
  },

  // Follows the same pattern as header_row and header_cell
  data_row: function(contact) {
    row = $('<tr>');
    row.addClass('data_row');
    row.append(this.data_cell(contact.first));
    row.append(this.data_cell(contact.last));
    row.append(this.data_cell(contact.address));
    return row;
  },
  
  data_cell: function(content) {
    cell = $('<td>');
    cell.html(content);
    return cell;
  }
}

