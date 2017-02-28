using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace demomvc.Controllers
{
    public class FilmController : Controller
    {
        // GET: Film
        public ActionResult Adminstrations()
        {
            return View();
        }
        //Customer
        public ActionResult Cusindex()
        {
            return View();
        }
    }
}