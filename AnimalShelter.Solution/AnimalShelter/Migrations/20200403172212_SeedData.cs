using Microsoft.EntityFrameworkCore.Migrations;

namespace AnimalShelter.Migrations
{
    public partial class SeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Cats",
                columns: new[] { "CatId", "Age", "Breed", "Gender", "Name" },
                values: new object[,]
                {
                    { 1, 8, "DS Blue", "Male", "Mister" },
                    { 2, 7, "DS Dilute Tortie", "Female", "Eliza Doolittle" },
                    { 3, 1, "DS Grey Tab", "Female", "Rhubarb" },
                    { 4, 12, "DL Tab", "Female", "Twitch" },
                    { 5, 18, "DS Black", "Female", "Awesome" }
                });

            migrationBuilder.InsertData(
                table: "Dogs",
                columns: new[] { "DogId", "Age", "Breed", "Gender", "Name" },
                values: new object[,]
                {
                    { 1, 2, "Pyrador", "Male", "Murphy" },
                    { 2, 10, "Malamute", "Female", "Peaches" },
                    { 3, 2, "Burnese Mountain Dog", "Female", "Bernice" },
                    { 4, 6, "English Mastiff", "Male", "Wrex" },
                    { 5, 18, "Rat Terrier", "Male", "Weezer" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Cats",
                keyColumn: "CatId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Cats",
                keyColumn: "CatId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Cats",
                keyColumn: "CatId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Cats",
                keyColumn: "CatId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Cats",
                keyColumn: "CatId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Dogs",
                keyColumn: "DogId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Dogs",
                keyColumn: "DogId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Dogs",
                keyColumn: "DogId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Dogs",
                keyColumn: "DogId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Dogs",
                keyColumn: "DogId",
                keyValue: 5);
        }
    }
}
