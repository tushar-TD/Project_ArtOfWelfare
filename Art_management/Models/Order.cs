using System;
using System.Collections.Generic;

namespace Art_management.Models;

public partial class Order
{
    public int OrderId { get; set; }

    public int CustId { get; set; }

    public decimal Amount { get; set; }

    public DateTime? Datetime { get; set; }

    public string PaymentId { get; set; } = null!;

    public string? PayMode { get; set; }

    public virtual Customer Cust { get; set; } = null!;

    public virtual ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();
}
