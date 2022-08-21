using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;
using FinalProject.Models;

namespace FinalProject
{
    public class Global : System.Web.HttpApplication
    {
        protected void Application_Start(object sender, EventArgs e)
        {
            Dog.CageType = "Pet Cage";
            Cat.CageType = "Pet Cage";
            Rabbit.CageType = "Rabbit Cage";
            Snake.CageType = "Snake Vivarium";

            Dog.PetLimit = 5;
            Cat.PetLimit = 8;
            Rabbit.PetLimit = 4;
            Snake.PetLimit = 2;
        }
    }
}