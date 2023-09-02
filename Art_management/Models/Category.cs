using System;
using System.Collections.Generic;

namespace Art_management.Models;

public partial class Category
{
    public int CatId { get; set; }

    public string CatName { get; set; } = null!;

    public virtual ICollection<Art> Arts { get; set; } = new List<Art>();
}
