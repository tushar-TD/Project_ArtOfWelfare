using System;
using System.Collections.Generic;

namespace Art_management.Models;

public partial class Question
{
    public int QueId { get; set; }

    public string QueText { get; set; } = null!;

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
