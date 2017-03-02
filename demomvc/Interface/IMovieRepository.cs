
using demomvc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace demomvc.Interface
{
    interface IMovieRepository
    {
        IEnumerable<Movie> GetAll();
        Movie Get(int id);
        Movie Add(Movie item);
        bool Update(Movie item);
        bool Delete(int id);
    }
}