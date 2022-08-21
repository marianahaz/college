<%@ Page Title="" Language="C#" MasterPageFile="~/Shared/PetHotel.Master" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="FinalProject.Home" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <title>HOME</title>
    
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="PageContent" runat="server">
    
    <h4>Welcome to Happy Paw Pet Hotel's internal system!</h4>
    
    <div class="calendar">
        <img src="Images/calendar.png" alt="Calendar"/>
        Today is 
        <asp:Label ID="TodayDate" runat="server" Text=""></asp:Label>
    </div>
    
    <div class="contents">
        <p>Go to <a href="Register.aspx">Register</a> to check-in or check-out pets.</p>
        <p>Go to <a href="Guests.aspx">Guests</a> to see the current pets in the hotel and the stats for today.</p>
    </div>

    <h4>Our past guests <small class="text-muted">wish you a good day!</small></h4>

    <div class="past-guests">
        <div class="guest-card">
            <img src="Images/misslittleclaws.png" />
            <p>Miss Little Claws</p>
        </div>
        <div class="guest-card">
            <img src="Images/snakespeare.png" />
            <p>William Snakespeare</p>
        </div>
        <div class="guest-card">
            <img src="Images/cheddar.png" />
            <p>Cheddar</p>
        </div>
        <div class="guest-card">
            <img src="Images/pudding.png" />
            <p>Pudding</p>
        </div>
        <div class="guest-card">
            <img src="Images/pikachu.png" />
            <p>Pikachu</p>
        </div>
        <div class="guest-card">
            <img src="Images/snowball.png" />
            <p>Snowball</p>
        </div>
        <div class="guest-card">
            <img src="Images/clawford.png" />
            <p>Cindy Clawford</p>
        </div>
        <div class="guest-card">
            <img src="Images/bunbun.png" />
            <p>Lady Bun Bun</p>
        </div>
        <div class="guest-card">
            <img src="Images/marshmallow.png" />
            <p>Marshmallow</p>
        </div>
        <div class="guest-card">
            <img src="Images/marypuppins.png" />
            <p>Mary Puppins</p>
        </div>
        <div class="guest-card">
            <img src="Images/cuddly.png" />
            <p>Cuddly Slinky</p>
        </div>
        <div class="guest-card">
            <img src="Images/coco.png" />
            <p>Coco</p>
        </div>

    </div>

</asp:Content>
