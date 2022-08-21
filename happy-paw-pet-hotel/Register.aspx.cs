using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using FinalProject.Models;

namespace FinalProject
{
    public partial class Register : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                CheckinOptions.Visible = false;
                CheckoutOptions.Visible = false;
            }
        }

        protected void ChangeOption(object sender, EventArgs e)
        {
            string option = OptionType.SelectedValue;
            switch (option)
            {
                case "checkin":
                    CheckinOptions.Visible = true;
                    CheckoutOptions.Visible = false;
                    inMsg.Visible = false;
                    // Clear form
                    PetType.ClearSelection();
                    PetName.Text = "";
                    OwnerName.Text = "";
                    OwnerPhoneNumber.Text = "";
                    Weight.Text = "";
                    FullyVaccinated.Checked = false;
                    break;
                case "checkout":
                    CheckoutOptions.Visible = true;
                    CheckinOptions.Visible = false;

                    // Clear list
                    CurrentPets.Items.Clear();

                    // Hide checkedout pets
                    CheckedoutPets.Visible = false;

                    // Load animals options by retrieving session
                    List<Pet> pets;
                    if (Session["Pets"] == null)
                    {
                        // No pets 
                        NoPetsCheckout.Visible = true;
                        checkoutButton.Visible = false;
                    }
                    else
                    {
                        pets = (List<Pet>)Session["Pets"];
                        // Hide button if there are no pets
                        if (pets.Count == 0)
                        {
                            checkoutButton.Visible = false;
                            NoPetsCheckout.Visible = true;
                            break;
                        }
                        foreach (Pet pet in pets)
                        {
                            string petText = pet.GetType().Name + " " + pet.Name + " (Owner: " + pet.OwnerName + ")";
                            CurrentPets.Items.Add(new ListItem(petText, Convert.ToString(pet.Id)));
                        }
                        checkoutButton.Visible = true;
                        NoPetsCheckout.Visible = false;
                    }

                    break;
            }
        }

        protected void CheckIfSnake(object sender, EventArgs e)
        {
            // Show vaccinated field if it's not a snake
            string selectedPet = PetType.SelectedValue;
            if (selectedPet != "snake")
            {
                FullyVaccinated.Visible = true;
            } 
            else
            {
                FullyVaccinated.Visible = false;
            }
        }

        protected void PetCheckIn(object sender, EventArgs e)
        {
            string petType = PetType.SelectedValue;
            string petName = PetName.Text;
            string ownerName = OwnerName.Text;
            string ownerPhone = OwnerPhoneNumber.Text;
            double weight = Convert.ToDouble(Weight.Text);
            bool isVac = true;

            if (!FullyVaccinated.Checked)
            {
                isVac = false;
            }

            inMsg.Visible = true;
                        
            // Create or retrieve session of pets
            List<Pet> pets;
            if (Session["Pets"] == null)
            {
                pets = new List<Pet>();
            }
            else
            {
                pets = (List<Pet>)Session["Pets"];
            }

            // Determine how many pets are in the hotel
            int gDog = 0, gCat = 0, gRabbit = 0, gSnake = 0;
            foreach (Pet pet in pets)
            {
                string type = pet.GetType().Name;
                switch (type)
                {
                    case "Dog":
                        gDog++;
                        break;
                    case "Cat":
                        gCat++;
                        break;
                    case "Rabbit":
                        gRabbit++;
                        break;
                    case "Snake":
                        gSnake++;
                        break;
                }
            }

            // Check if it's success or error
            bool success = true;

            // Check if pet limit is reached, if not, create pet instance and add to session
            switch (petType)
            {
                case "dog":
                    if (gDog >= Dog.PetLimit)
                    {
                        inMsg.Text = "Dog limit has been reached: " + Convert.ToString(Dog.PetLimit);
                        success = false;
                    }
                    else
                    {
                        Dog newDog = new Dog(petName, ownerName, ownerPhone, weight, isVac);
                        pets.Add(newDog);
                        inMsg.Text = "Check-in successfully completed for the dog " + petName;
                    }
                    break;
                case "cat":
                    if (gCat >= Cat.PetLimit)
                    {
                        inMsg.Text = "Cat limit has been reached: " + Convert.ToString(Cat.PetLimit);
                        success = false;
                    } 
                    else
                    {
                        Cat newCat = new Cat(petName, ownerName, ownerPhone, weight, isVac);
                        pets.Add(newCat);
                        inMsg.Text = "Check-in successfully completed for the cat " + petName;
                    }
                    break;
                case "rabbit":
                    if (gRabbit >= Rabbit.PetLimit)
                    {
                        inMsg.Text = "Rabbit limit has been reached: " + Convert.ToString(Rabbit.PetLimit);
                        success = false;
                    }
                    else
                    {
                        Rabbit newRabbit = new Rabbit(petName, ownerName, ownerPhone, weight, isVac);
                        pets.Add(newRabbit);
                        inMsg.Text = "Check-in successfully completed for the rabbit " + petName;
                    }
                    break;
                case "snake":
                    if (gSnake >= Snake.PetLimit)
                    {
                        inMsg.Text = "Snake limit has been reached: " + Convert.ToString(Snake.PetLimit);
                        success = false;
                    }
                    else
                    {
                        Snake newSnake = new Snake(petName, ownerName, ownerPhone, weight, isVac);
                        pets.Add(newSnake);
                        inMsg.Text = "Check-in successfully completed for the snake " + petName;
                    }
                    break;
            }

            // Color the msg box accordingly
            if (success)
            {
                inMsg.CssClass = "successMsg";
            }
            else
            {
                // error
                inMsg.CssClass = "errorMsg";
            }

            // Update session
            Session["Pets"] = pets;

            // Clear form
            PetType.ClearSelection();
            PetName.Text = "";
            OwnerName.Text = "";
            OwnerPhoneNumber.Text = "";
            Weight.Text = "";
            FullyVaccinated.Checked = false;
        }

        protected void PetCheckOut(object sender, EventArgs e)
        {
            // Get pets from the session
            List<Pet> pets = (List<Pet>)Session["Pets"];
            List<Pet> petsToRemove = new List<Pet>();
            foreach (ListItem petGuest in CurrentPets.Items)
            {
                if (petGuest.Selected)
                {
                    foreach (Pet pet in pets)
                    {
                        if (Convert.ToInt32(petGuest.Value) == pet.Id)
                        {
                            petsToRemove.Add(pet);
                        }
                    }
                }
            }

            
            foreach (Pet removePet in petsToRemove)
            {
                pets.Remove(removePet);
            }

            // Update session
            Session["Pets"] = pets;

            // Clean list and update the list of pets
            CurrentPets.Items.Clear();
            foreach (Pet pet in pets)
            {
                string petText = pet.GetType().Name + " " + pet.Name + " (Owner: " + pet.OwnerName + ")";
                CurrentPets.Items.Add(new ListItem(petText, Convert.ToString(pet.Id)));
            }

            // List of pets that were checked-out
            CheckedoutPets.Text = "";
            CheckedoutPets.Visible = true;
            foreach (Pet removePet in petsToRemove)
            {
                CheckedoutPets.Text += Convert.ToString(removePet.GetType().Name) + " " + removePet.Name + " has been successfully checked out.<br>";
            }

            if (pets.Count == 0)
            {
                NoPetsCheckout.Visible = true;
                checkoutButton.Visible = false;
            }
            else
            {
                NoPetsCheckout.Visible = false;
            }
        }
    }
}