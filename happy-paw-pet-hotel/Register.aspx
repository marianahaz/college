<%@ Page Title="" Language="C#" MasterPageFile="~/Shared/PetHotel.Master" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="FinalProject.Register" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="PageContent" runat="server">

    <h4>Registration <small class="text-muted">Check-in and check-out guests</small></h4>

    <div class="row">
        <div class="col-md-6 selectType">

            <label for="OptionType">Select the registration type</label>
            <asp:DropDownList ID="OptionType" runat="server" OnSelectedIndexChanged="ChangeOption" AutoPostBack="true" CssClass="form-control">
                <asp:ListItem Value="-1">Select...</asp:ListItem>
                <asp:ListItem Value="checkin">Check-in</asp:ListItem>
                <asp:ListItem Value="checkout">Check-out</asp:ListItem>
            </asp:DropDownList>
    
        </div>
    </div>
       
        
    <asp:Panel ID="CheckinOptions" runat="server">

        <div class="row">
            <div class="col-md-6">

                <asp:Label ID="inMsg" runat="server" Text="" Visible="false"></asp:Label>
                
                <label for="PetType">Species</label>
                <asp:RadioButtonList ID="PetType" runat="server" OnSelectedIndexChanged="CheckIfSnake"
                    AutoPostBack="True">
                    <asp:ListItem Value="cat">Cat</asp:ListItem>
                    <asp:ListItem Value="dog">Dog</asp:ListItem>
                    <asp:ListItem Value="rabbit">Rabbit</asp:ListItem>
                    <asp:ListItem Value="snake">Snake</asp:ListItem>
                </asp:RadioButtonList>
                <asp:RequiredFieldValidator ID="reqPetType" runat="server" ControlToValidate="PetType"
                    Display="Dynamic" CssClass="field-validation">Species is required</asp:RequiredFieldValidator>
                

                <label>Pet name</label>
                <asp:TextBox ID="PetName" runat="server" CssClass="form-control"></asp:TextBox>
                <asp:RequiredFieldValidator ID="reqPetName" runat="server" ControlToValidate="PetName"
                    Display="Dynamic" CssClass="field-validation">Pet name is required</asp:RequiredFieldValidator>
                

                <label>Pet weight (kg)</label>
                <asp:TextBox ID="Weight" runat="server" CssClass="form-control"></asp:TextBox>
                <asp:RequiredFieldValidator ID="reqWeight" runat="server" ControlToValidate="Weight"
                    Display="Dynamic" CssClass="field-validation">Pet weight is required</asp:RequiredFieldValidator>
                <asp:RangeValidator ID="rvWeight" runat="server" ControlToValidate="Weight"
                Type="Double" ErrorMessage="Please enter a valid weight" MaximumValue="100"
                MinimumValue="0" Display="Dynamic" CssClass="field-validation"></asp:RangeValidator>
                

                <label>Owner name</label>
                <asp:TextBox ID="OwnerName" runat="server" CssClass="form-control"></asp:TextBox>
                <asp:RequiredFieldValidator ID="reqOwner" runat="server" ControlToValidate="OwnerName"
                    Display="Dynamic" CssClass="field-validation">Owner's name is required</asp:RequiredFieldValidator>
                

                <label>Owner phone number</label>
                <asp:TextBox ID="OwnerPhoneNumber" runat="server" CssClass="form-control"></asp:TextBox>
                <asp:RequiredFieldValidator ID="reqOwnerPhoneNumber" runat="server" ControlToValidate="OwnerPhoneNumber"
                    Display="Dynamic" CssClass="field-validation">Owner's phone number is required</asp:RequiredFieldValidator>
                <asp:CompareValidator ID="cvPhone" runat="server" ErrorMessage="Please enter a number"
                ControlToValidate="OwnerPhoneNumber" Type="Integer" 
                Operator="DataTypeCheck" Display="Dynamic" CssClass="field-validation"></asp:CompareValidator>
        
                <asp:CheckBox ID="FullyVaccinated" runat="server" Text="Fully vaccinated" Visible="false" CssClass="fullyvac" />

                <asp:Button ID="checkinButton" runat="server" Text="Check-In" OnClick="PetCheckIn" CssClass="btn" />

            </div>
        </div>
    
    </asp:Panel>


    <asp:Panel ID="CheckoutOptions" runat="server">

        <div class="row">
            <div class="col-md-6">

                <label class="selectcheckout">Select pet(s) to checkout:</label>
                <asp:Label ID="NoPetsCheckout" runat="server" Text="No guests currently in the hotel" CssClass="nopetsMsg"></asp:Label>

                <asp:CheckBoxList ID="CurrentPets" runat="server">
                </asp:CheckBoxList>

                <asp:Label ID="CheckedoutPets" runat="server" Text="" Visible="false" CssClass="successMsg"></asp:Label>

                <asp:Button ID="checkoutButton" runat="server" Text="Check-Out" OnClick="PetCheckOut" CssClass="btn"/>
             
            </div>
        </div>

    </asp:Panel>


    
</asp:Content>
