<%@ Page Title="" Language="C#" MasterPageFile="~/Shared/PetHotel.Master" AutoEventWireup="true" CodeBehind="Guests.aspx.cs" Inherits="FinalProject.Guests" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="PageContent" runat="server">
    
    <h4>Current Guests</h4>

    <div class="row">
        <div class="col-md-11">

            <asp:Table ID="tblPets" runat="server" CssClass="table table-striped">
                <asp:TableHeaderRow CssClass="thead-light">
                    <asp:TableHeaderCell>ID</asp:TableHeaderCell>
                    <asp:TableHeaderCell>Species</asp:TableHeaderCell>
                    <asp:TableHeaderCell>Name</asp:TableHeaderCell>
                    <asp:TableHeaderCell>Owner</asp:TableHeaderCell>
                    <asp:TableHeaderCell>Owner Phone</asp:TableHeaderCell>
                    <asp:TableHeaderCell>Fully Vaccinated</asp:TableHeaderCell>
                    <asp:TableHeaderCell>Check-in Date</asp:TableHeaderCell>
                </asp:TableHeaderRow>
                <asp:TableRow ID="tblMessage" Visible="False">
                    <asp:TableCell ColumnSpan="7"><span>No guests currently at the hotel</span></asp:TableCell>
                </asp:TableRow>
            </asp:Table>

        </div>
    </div>

    <asp:Panel ID="Stats" runat="server">

        <h4>Today's Stats</h4>

        <h5>Food</h5>
        <div class="cards">
            <div class="card">
                <div class="imgArea">
                    <img src="Images/dog.png" alt="Dog">
                </div>
                <asp:Label ID="DogFood" runat="server" Text="Label" CssClass="amount"></asp:Label>
                <p class="name">Dog food</p>
            </div>
            <div class="card">
                <div class="imgArea">
                    <img src="Images/cat.png" alt="Cat">
                </div>
                <asp:Label ID="CatFood" runat="server" Text="Label" CssClass="amount"></asp:Label>
                <p class="name">Cat sachets</p>
            </div>
            <div class="card">
                <div class="imgArea">
                    <img src="Images/rabbit.png" alt="Rabbit" style="width: 50px; margin-top: 5px">
                </div>
                <asp:Label ID="RabbitFood" runat="server" Text="Label" CssClass="amount"></asp:Label>
                <p class="name">Carrots</p>
            </div>
            <div class="card">
                <div class="imgArea">
                    <img src="Images/snake.png" alt="Snake">
                </div>
                <asp:Label ID="SnakeFood" runat="server" Text="Label" CssClass="amount"></asp:Label>
                <p class="name">Mice</p>
            </div>
        </div>
        <p class="smalltxt">(*) The information displayed above refers to the amount of food required for a day for the pets currently checked-in.</p>

        <h5>Occupied Cages</h5>
        <div class="cards card_cage">
            <div class="card">
                <div class="imgArea">
                    <img src="Images/dogcat.png" alt="Dog" style="width: 80px;">
                </div>
                <asp:Label ID="DogCatCages" runat="server" Text="Label" CssClass="amount"></asp:Label>
                <asp:Label ID="DogCatCageType" runat="server" Text="Label" CssClass="name"></asp:Label>
            </div>
            <div class="card">
                <div class="imgArea">
                    <img src="Images/rabbit.png" alt="Rabbit" style="width: 50px; margin-top: 5px">
                </div>
                <asp:Label ID="RabbitCages" runat="server" Text="Label" CssClass="amount"></asp:Label>
                <asp:Label ID="RabbitCageType" runat="server" Text="Label" CssClass="name"></asp:Label>
            </div>
            <div class="card">
                <div class="imgArea">
                    <img src="Images/snake.png" alt="Snake">
                </div>
                <asp:Label ID="SnakeCages" runat="server" Text="Label" CssClass="amount"></asp:Label>
                <asp:Label ID="SnakeCageType" runat="server" Text="Label" CssClass="name"></asp:Label>
            </div>
        </div>

    </asp:Panel>

</asp:Content>
