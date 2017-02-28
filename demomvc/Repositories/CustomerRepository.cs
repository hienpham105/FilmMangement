using demomvc.Interface;
using demomvc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace demomvc.Repositories
{
    public class CustomerRepository: ICustomerRepository
    {
        FilmStoreEntities db = new FilmStoreEntities();
        public IEnumerable<Customer> GetAll()
        {
            return db.Customers;
        }

        //GET
        public Customer Get(int id)
        {
            return db.Customers.Find(id);
        }

        //Add
        public Customer Add(Customer item)
        {
            if(item == null)
            {
                throw new ArgumentNullException("item");
            }
            //
            db.Customers.Add(item);
            db.SaveChanges();
            return item;
        }

        //Update

        public bool Update(Customer item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            //
            var cus = db.Customers.Single(a => a.ID == item.ID);
            cus.Firstname = item.Firstname;
            cus.Lastname = item.Lastname;
            cus.Email = item.Email;
            cus.IdentityCard = item.IdentityCard;
            cus.UniqueKey = item.UniqueKey;
            cus.DateOfBirth = item.DateOfBirth;
            cus.Mobile = item.Mobile;
            cus.ResgisteredDate = item.ResgisteredDate;

            //
            db.SaveChanges();
            return true;
        }

        //Delete

        public bool Delete(int id)
        {
            Customer cus = db.Customers.Find(id);
            db.Customers.Remove(cus);
            db.SaveChanges();
            return true;
        }
    }
}