using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Data.Migrations
{
    public partial class IdentityAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7a5d6910-8424-4f17-ab26-a431d5a0d12a");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8fe9eb38-d801-4b86-bc5b-f56c2f98d79d");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "c65de0f4-831b-4a03-a120-4e296c81f730", "ab61b274-58b6-4aa1-89ac-6554ead574dd", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "1526e31b-8b60-4bf5-b5e6-579c39c14170", "651c268d-209f-426f-b069-3fd88ba4273f", "Admin", "ADMIN" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1526e31b-8b60-4bf5-b5e6-579c39c14170");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c65de0f4-831b-4a03-a120-4e296c81f730");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "7a5d6910-8424-4f17-ab26-a431d5a0d12a", "92661abd-1e9a-455f-9a0c-fe5b18751b03", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "8fe9eb38-d801-4b86-bc5b-f56c2f98d79d", "7cc2628c-c250-46d0-9eef-d16f5bcbbf71", "Admin", "ADMIN" });
        }
    }
}
