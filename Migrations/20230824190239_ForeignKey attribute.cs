using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RestaurantAPI.Migrations
{
    /// <inheritdoc />
    public partial class ForeignKeyattribute : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CustomerID",
                table: "Customers",
                newName: "CustomerId");

            migrationBuilder.AlterColumn<string>(
                name: "PMethod",
                table: "OrderMasters",
                type: "nvarchar(10)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(10)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "OrderNumber",
                table: "OrderMasters",
                type: "nvarchar(75)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(75)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "FoodItemName",
                table: "FoodItems",
                type: "nvarchar(100)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldNullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CustomerId",
                table: "Customers",
                newName: "CustomerID");

            migrationBuilder.AlterColumn<string>(
                name: "PMethod",
                table: "OrderMasters",
                type: "nvarchar(10)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(10)");

            migrationBuilder.AlterColumn<string>(
                name: "OrderNumber",
                table: "OrderMasters",
                type: "nvarchar(75)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(75)");

            migrationBuilder.AlterColumn<string>(
                name: "FoodItemName",
                table: "FoodItems",
                type: "nvarchar(100)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)");
        }
    }
}
