using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AnimalShelter.Models;

namespace AnimalShelter.Controllers
{
  [ApiVersion("1.0")]
  [Route("api/[controller]")]
  [ApiController]
  public class DogsController : ControllerBase
  {
    private AnimalShelterContext _db;

    public DogsController(AnimalShelterContext db)
    {
      _db = db;
    }
    // GET api/dogs
    [HttpGet]
    public ActionResult<IEnumerable<Dog>> Get(string name, string breed, int? age, string gender)
    {
      var query = _db.Dogs.AsQueryable();

      if(name != null)
      {
        query = query.Where(pup => pup.Name == name);
      }
      if(breed != null)
      {
        query = query.Where(pup => pup.Breed == breed);
      }
      if(age != null)
      {
        query = query.Where(pup => pup.Age == age);
      }
      if(gender != null)
      {
        query = query.Where(pup => pup.Gender == gender);
      }
      return query.ToList();
    }

    // GET api/dogs/5
    [HttpGet("{id}")]
    public ActionResult<Dog> Get(int id)
    {
      return _db.Dogs.FirstOrDefault(pup => pup.DogId == id);
    }

    // POST api/dogs
    [HttpPost]
    public void Post([FromBody] Dog dog)
    {
      _db.Dogs.Add(dog);
      _db.SaveChanges();
    }

    // PUT api/dogs/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] Dog dog)
    {
      dog.DogId = id;
      _db.Entry(dog).State = EntityState.Modified;
      _db.SaveChanges();
    }

    // DELETE api/dogs/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
      Dog adoptedDog = _db.Dogs.FirstOrDefault(pup => pup.DogId == id);
      _db.Dogs.Remove(adoptedDog);
      _db.SaveChanges();
    }
  }
}
