using System;
using System.Collections.Generic;
using System.Text;
using EmployeeRecognition_Lib.Enums;

namespace EmployeeRecognition_Lib.Models
{
    public class Submission
    {
        public int SubmissionID { get; set; }
        public string Recipient { get; set; }
        public Dictionary<string, bool> WhyHustler{ get; set; }
        public Departments Department { get; set; }
        public Locations Location { get; set; }
        public string Date { get; set; }
        public string Submitter { get; set; }
        public string SubmitterEmail { get; set; }
        public string RecipientEmail { get; set; }
        public string Reason { get; set; }

    }
}
