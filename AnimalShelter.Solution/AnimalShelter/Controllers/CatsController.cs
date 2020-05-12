using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AnimalShelter.Models;
using Microsoft.AspNetCore.Cors;

namespace AnimalShelter.Controllers
{
  [ApiVersion("1.0")]
  [Route("api/[controller]")]
  [ApiController]
  public class CatsController : ControllerBase
  {
    private AnimalShelterContext _db;

    public CatsController(AnimalShelterContext db)
    {
      _db = db;
    }
    // GET api/cats
    [HttpGet]
    public ActionResult<IEnumerable<Cat>> Get(string name, string breed, int? age, string gender)
    {
      var query = _db.Cats.AsQueryable();

      if(name != null)
      {
        query = query.Where(kitty => kitty.Name == name);
      }
      if(breed != null)
      {
        query = query.Where(kitty => kitty.Breed == breed);
      }
      if(age != null)
      {
        query = query.Where(kitty => kitty.Age == age);
      }
      if(gender != null)
      {
        query = query.Where(kitty => kitty.Gender == gender);
      }
      return query.ToList();
    }

    // GET api/cats/5
    [HttpGet("{id}")]
    public ActionResult<Cat> Get(int id)
    {
      return _db.Cats.FirstOrDefault(kitty => kitty.CatId == id);
    }

    // POST api/cats
    [EnableCors("MyPolicy")]
    [HttpPost]
    public void Post([FromBody] Cat cat)
    {
      _db.Cats.Add(cat);
      _db.SaveChanges();
    }

    // PUT api/cats/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] Cat cat)
    {
      cat.CatId = id;
      _db.Entry(cat).State = EntityState.Modified;
      _db.SaveChanges();
    }

    // DELETE api/cats/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
      Cat adoptedCat = _db.Cats.FirstOrDefault(kitty => kitty.CatId == id);
      _db.Cats.Remove(adoptedCat);
      _db.SaveChanges();
    }
  }
}
