using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Mvc;

namespace demomvc.Controllers
{
    public class TestController : ApiController
    {
        public JsonResult test()
        {
            var a = "aa";
            return Json(a, JsonRequestBehavior.AllowGet, );
        }
    }
}
