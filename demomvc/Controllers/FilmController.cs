using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using demomvc.Models;

namespace demomvc.Controllers
{
    public class FilmController : Controller
    {
        FilmStoreEntities db = new FilmStoreEntities();
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
        //Movie
        public ActionResult MovIndex()
        {
            return View();
        }
        public ActionResult ListCustomer()
        {
            return View(db.Customers.ToList());
        }
    }
}