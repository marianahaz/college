using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FinalProject.Models
{
    public class Pet
    {
        private int id;
        private string name;
        private string ownerName;
        private string ownerPhone;
        private double weight;
        private DateTime checkinDate;
        private bool isVaccinated;

        public Pet (string name, string ownerName, string ownerPhone, double weight, bool isVaccinated)
        {
            // Generate random id
            Random rnd = new Random();
            this.id = rnd.Next(10000, 99999);
            this.name = name;
            this.ownerName = ownerName;
            this.ownerPhone = ownerPhone;
            this.weight = weight;
            this.checkinDate = DateTime.Now;
            this.isVaccinated = isVaccinated;
        }

        // Declare all properties
        public int Id { get { return id; } }
        public string Name { get { return name; } set { name = value; } }
        public string OwnerName { get { return ownerName; } set { ownerName = value; } }
        public string OwnerPhone { get { return ownerPhone; } set { ownerPhone = value; } }
        public double Weight { get { return weight; } set { weight = value; } }
        public DateTime CheckinDate { get { return checkinDate; } }
        public bool IsVaccinated { get { return isVaccinated; } set { isVaccinated = value; } }
    
        // Create method to calculate amount of food based on pet weight
        public virtual double GetFoodAmount(double weight)
        {
            return 0;
        }

        // Create method to calculate days since checkin
        public int GetDaysSinceCheckin(DateTime checkinDate)
        {
            DateTime today = DateTime.Now;
            int days = (today.Date - checkinDate.Date).Days;
            return days;
        }

    }
}