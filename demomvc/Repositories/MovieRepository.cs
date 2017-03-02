using demomvc.Interface;
using demomvc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace demomvc.Repositories
{
    public class MovieRepository: IMovieRepository
    {
        FilmStoreEntities db = new FilmStoreEntities();
        public IEnumerable<Movie> GetAll()
        {
            return db.Movies;
        }
        //
        public Movie Get(int id)
        {
            return db.Movies.Find(id);
        }
        //
        public Movie Add(Movie item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            //
            db.Movies.Add(item);
            db.SaveChanges();
            return item;
        }
        //
        public bool Update(Movie item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            //
            var movie = db.Movies.Single(a => a.ID == item.ID);
            movie.Title = item.Title;
            movie.Description = item.Description;
            movie.Image = item.Image;
            movie.Director = item.Director;
            movie.Producer = item.Producer;
            movie.Writer = item.Writer;
            movie.Genre = item.Genre;
            movie.Rating = item.Rating;
            movie.TrailerURL = item.TrailerURL;
            db.SaveChanges();
            return true;
        } 
        //
        public bool Delete(int id)
        {
            Movie movie = db.Movies.Find(id);
            db.Movies.Remove(movie);
            db.SaveChanges();
            return true;
        }
    }
}