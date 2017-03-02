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
    public class MovieController : ApiController
    {
        static readonly IMovieRepository repository = new MovieRepository();
        [HttpGet]
        public IEnumerable GetAllMovie()
        {
            return repository.GetAll();
        }
        //
        public Movie PostMovie(Movie item)
        {
            return repository.Add(item);
        }
        //
        public IEnumerable PutMovie(Movie movie)
        {
            if (repository.Update(movie))
            {
                return repository.GetAll();
            }
            else
            {
                return null;
            }
        }
        //
        public bool DeleteMovie(int id)
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
