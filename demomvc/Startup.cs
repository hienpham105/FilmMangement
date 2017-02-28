using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(demomvc.Startup))]
namespace demomvc
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
