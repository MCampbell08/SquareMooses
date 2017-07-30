using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeRecognition.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            //if (User.Identity.IsAuthenticated)
            //{
                return View();
            //}
            //return RedirectToAction("Login", "Account");
        }

        public IActionResult Review()
        {
            ViewData["Message"] = "These are the nominated hustlers.";

            return View();
        }

        public IActionResult Drawing()
        {
            ViewData["Message"] = "Try your luck at these prizes..";
            ViewData["Prizes"] = new string[] { "XBox One", "Dodge Challenger", "Amazon Giftcard", "A snake", "Marshmallows", "One dollar" };

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
