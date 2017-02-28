using demomvc.Interface;
using demomvc.Repositories;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using demomvc.Models;
using System.Web.Http;

namespace demomvc.Controllers
{
    public class CustomerController : ApiController
    {
        //API 2 controller
        static readonly ICustomerRepository repository = new CustomerRepository();
        //GET
        //Show customer
        public IEnumerable GetAllCustomers()
        {
            return repository.GetAll();
        }
        //Add
        public Customer PostCustomer(Customer item)
        {
            return repository.Add(item);
        }
        //update
        public IEnumerable PutCustomer(Customer cus)
        {
            if (repository.Update(cus))
            {
                return repository.GetAll();
            }
            else
            {
                return null;
            }
        }

        //Delete
        public bool DeleteCustomer(int id)
        {
            if (repository.Delete(id))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
