using Smart_Campus_PUMUB.Components;
using Smart_Campus_PUMUB.BlazorServer.Frontend.Services; // 💡 HttpClientService ရှိမည့် Namespace အား လှမ်းခေါ်ခြင်း

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

// ==========================================
// 🛠️ ဤနေရာတွင် Services များကို စနစ်တကျ ရေးရပါမည် (app = builder.Build() မတိုင်မီ)
// ==========================================

// ၁။ Base API URL အား "SmartCampusApi" အမည်ဖြင့် သတ်မှတ်ခြင်း
builder.Services.AddHttpClient("SmartCampusApi", client =>
{
    // မင်းရဲ့ API Server သို့ တိုက်ရိုက်လမ်းကြောင်း (End-slash ပါရပါမည်)
    client.BaseAddress = new Uri("https://localhost:7297/api/"); 
});

// ၂။ ဗဟို API Engine ဖြစ်သော HttpClientService အား Register လုပ်ခြင်း
builder.Services.AddScoped<HttpClientService>();

// ==========================================

var app = builder.Build(); // ✨ ၎င်း၏အထက်တွင် Service များ အားလုံး ရှိနေရပါမည်

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseAntiforgery();

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.Run();