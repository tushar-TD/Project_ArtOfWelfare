using System;
using System.Collections.Generic;

namespace Art_management.Models;

public partial class OrderDetail
{
    public int OdId { get; set; }

    public int OrderId { get; set; }

    public int ArtId { get; set; }

    public virtual Art Art { get; set; } = null!;

    public virtual Order Order { get; set; } = null!;
}
