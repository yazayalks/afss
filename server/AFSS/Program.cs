using AFSS.Models;
using AFSS.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("AFSSContextConnection");

builder.Services.AddDbContext<ApplicationContext>(options =>
               options.UseSqlServer(connectionString));

// Добавляем сервис валидатора пароля
builder.Services.AddTransient<IPasswordValidator<User>,
        CustomPasswordValidator>(serv => new CustomPasswordValidator(30));

// Добавляем сервис валидатора логина
builder.Services.AddTransient<IUserValidator<User>,
        CustomRegisrationValidator>();

builder.Services.AddIdentity<User, IdentityRole>()
    .AddEntityFrameworkStores<ApplicationContext>();

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<AfssContext>();

builder.Services.ConfigureApplicationCookie(options =>
{
    options.Events.OnRedirectToLogin = context =>
    {
        context.Response.StatusCode = 401;
        return Task.CompletedTask;
    };
});

/*builder.Services.AddMvc();*/

builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

/*app.UseStaticFiles();
app.UseEndpoints(builder => builder.MapControllers());*/
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

/*app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");*/

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Selection}/{action=Index}/{id?}");

app.Run();


    
