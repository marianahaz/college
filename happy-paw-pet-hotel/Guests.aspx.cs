using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using FinalProject.Models;

namespace FinalProject
{
    public partial class Guests : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // Retrieve session
            List<Pet> pets;
            if (Session["Pets"] == null)
            {
                // Add no pets message
                tblMessage.Visible = true;
                // Hide stats
                Stats.Visible = false;
            }
            else
            {
                pets = (List<Pet>)Session["Pets"];
                if (pets.Count == 0)
                {
                    // Add no pets message
                    tblMessage.Visible = true;
                    // Hide stats
                    Stats.Visible = false;
                    // Break if there are no pets
                    return;
                }

                tblMessage.Visible = false;

                // Fill table with current pets
                foreach (Pet pet in pets)
                {
                    TableRow row = new TableRow();
                    tblPets.Rows.Add(row);
                    TableCell cell = new TableCell();
                    cell.Text = Convert.ToString(pet.Id);
                    row.Cells.Add(cell);
                    cell = new TableCell();
                    string type = pet.GetType().Name;
                    cell.Text = type;
                    row.Cells.Add(cell);
                    cell = new TableCell();
                    cell.Text = pet.Name;
                    row.Cells.Add(cell);
                    cell = new TableCell();
                    cell.Text = pet.OwnerName;
                    row.Cells.Add(cell);
                    cell = new TableCell();
                    cell.Text = pet.OwnerPhone;
                    row.Cells.Add(cell);
                    cell = new TableCell();
                    string vaccinated = "-";
                    if (type == "Dog" || type == "Cat" || type == "Rabbit")
                    {
                        if (pet.IsVaccinated == false)
                        {
                            vaccinated = "No";
                        }
                        else
                        {
                            vaccinated = "Yes";
                        }
                    }
                    cell.Text = vaccinated;
                    row.Cells.Add(cell);
                    cell = new TableCell();
                    cell.Text = pet.CheckinDate.ToLongDateString();
                    row.Cells.Add(cell);
                }


                // Add stats to the page

                // Calculate food amount for each
                // Calculate amount of cages for each
                double dogFood = 0, rabbitFood = 0;
                int catFood = 0, snakeFood = 0;

                int dCage = 0, rCage = 0, sCage = 0;

                foreach(Pet pet in pets)
                {
                    string type = pet.GetType().Name;
                    switch (type)
                    {
                        case "Dog":
                            dogFood += pet.GetFoodAmount(pet.Weight);
                            dCage++;
                            break;
                        case "Cat":
                            catFood += Convert.ToInt32(pet.GetFoodAmount(pet.Weight));
                            dCage++;
                            break;
                        case "Rabbit":
                            rabbitFood += pet.GetFoodAmount(pet.Weight);
                            rCage++;
                            break;
                        case "Snake":
                            snakeFood += Convert.ToInt32(pet.GetFoodAmount(pet.Weight));
                            sCage++;
                            break;
                    }
                }

                DogFood.Text = Convert.ToString(dogFood) + "g";
                RabbitFood.Text = Convert.ToString(rabbitFood) + "g";
                CatFood.Text = Convert.ToString(catFood);
                SnakeFood.Text = Convert.ToString(snakeFood);
                                
                DogCatCageType.Text = Dog.CageType;
                RabbitCageType.Text = Rabbit.CageType;
                SnakeCageType.Text = Snake.CageType;

                DogCatCages.Text = Convert.ToString(dCage);
                RabbitCages.Text = Convert.ToString(rCage);
                SnakeCages.Text = Convert.ToString(sCage);



            }

        }
    }
}