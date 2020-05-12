using Microsoft.EntityFrameworkCore;

namespace AnimalShelter.Models
{
  public class AnimalShelterContext : DbContext
  {
    public AnimalShelterContext(DbContextOptions<AnimalShelterContext> options)
        : base(options)
    {
    }

    public DbSet<Dog> Dogs { get; set; }
    public DbSet<Cat> Cats { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      builder.Entity<Dog>()
      .HasData(
          new Dog { DogId = 1, Name = "Murphy", Breed = "Pyrador", Age = 2, Gender = "Male" },
          new Dog { DogId = 2, Name = "Peaches", Breed = "Malamute", Age = 10, Gender = "Female" },
          new Dog { DogId = 3, Name = "Bernice", Breed = "Burnese Mountain Dog", Age = 2, Gender = "Female" },
          new Dog { DogId = 4, Name = "Wrex", Breed = "English Mastiff", Age = 6, Gender = "Male" },
          new Dog { DogId = 5, Name = "Weezer", Breed = "Rat Terrier", Age = 18, Gender = "Male" }
      );
      builder.Entity<Cat>()
      .HasData(
          new Cat { CatId = 1, Name = "Mister", Breed = "DS Blue", Age = 8, Gender = "Male" },
          new Cat { CatId = 2, Name = "Eliza Doolittle", Breed = "DS Dilute Tortie", Age = 7, Gender = "Female" },
          new Cat { CatId = 3, Name = "Rhubarb", Breed = "DS Grey Tab", Age = 1, Gender = "Female" },
          new Cat { CatId = 4, Name = "Twitch", Breed = "DL Tab", Age = 12, Gender = "Female" },
          new Cat { CatId = 5, Name = "Awesome", Breed = "DS Black", Age = 18, Gender = "Female" }
      );
    }
  }
}