#include<iostream>
using namespace std;
bool check(char a[][100],int n,int m,int i,int j,int b[][100])
{
    if(i==n-1 && j==m-1)
    {
        b[i][j]=1;
        return 1;
    }
    if(i==n-1)
    {
        if(check(a,n,m,i,j+1,b))
        {
            return true;
        }
        b[i][j]=0;
        return false;
    }
    if(j==m-1)
    {
        if(check(a,n,m,i+1,j,b))
        {
            return true;
        }
        b[i][j]=0;
        return false;
    }
    if(a[i][j]=='X')
    {
        return 0;
    }
    b[i][j]=1;
    bool done1=check(a,n,m,i,j+1,b);
    if(done1)
    {
        return 1;
    }
    bool done2=check(a,n,m,i+1,j,b);
    if(done2)
    {
        return 1;
    }
    b[i][j]=0;
    return 0;
}
int main()
{
    int n,m;
    char a[100][100];
    cin>>n>>m;
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<m;j++)
        {
            cin>>a[i][j];
        }
    }
    int b[100][100]={0};
    int x=check(a,n,m,0,0,b);
    if(x==1)
    {
      for(int i=0;i<n;i++)
        {
            for(int j=0;j<m;j++)
            {
                cout<<b[i][j]<<" ";
            }
            cout<<endl;
        }
    }
    else if(x==0)
    {
        cout<<"-1";
    }
    return 0;
}

/*
#include<iostream>
using namespace std;
bool check(char a[][100],int n,int m,int i,int j,int b[][100])
{
    if(i==n-1 && j==m-1)
    {
        b[i][j]=1;
        return 1;
    }
    if(i==n)
    {
        return 0;
    }
    if(j==m)
    {
        return 0;
    }
    if(a[i][j]=='X')
    {
        return 0;
    }
    b[i][j]=1;
    bool done1=check(a,n,m,i,j+1,b);
    if(done1)
    {
        return 1;
    }
    bool done2=check(a,n,m,i+1,j,b);
    if(done2)
    {
        return 1;
    }
    b[i][j]=0;
    return 0;
}
int main()
{
    int n,m;
    char a[100][100];
    cin>>n>>m;
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<m;j++)
        {
            cin>>a[i][j];
        }
    }
    int b[100][100]={0};
    int x=check(a,n,m,0,0,b);
    if(x==1)
    {
      for(int i=0;i<n;i++)
        {
            for(int j=0;j<m;j++)
            {
                cout<<b[i][j]<<" ";
            }
            cout<<endl;
        }
    }
    else if(x==0)
    {
        cout<<"-1";
    }
    return 0;
}

*/
