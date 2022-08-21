using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FinalProject.Models
{
    public class Dog : Pet
    {
        private static string cageType;
        private static int petLimit;

        public Dog(string name, string ownerName, string ownerPhone, double weight, bool isVaccinated) : base(name, ownerName, ownerPhone, weight, isVaccinated)
        {
        }

        public static string CageType { get { return cageType; } set { cageType = value; } }
        public static int PetLimit { get { return petLimit; } set { petLimit = value; } }


        public override double GetFoodAmount(double weight)
        {
            double amount = weight * 90.8;
            return amount;
        }


    }
}