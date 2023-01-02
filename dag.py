#User function Template for python3
import sys
sys.setrecursionlimit(1000)
class Solution:
    def dfs(self, graph, s, d):
        if s == d:
            return 1
        count = 0
        if s in graph:
            for i in graph[s]:
                count += self.dfs(graph, i, d,)
        return count
    def possible_paths(self, edges, n, s, d):
        #Code here
        mp = {}
        vis = [0 for i in range(n)]
        for i in edges:
            if i[0] in mp:
                mp[i[0]].append(i[1])
            else:
                mp[i[0]] = [i[1]]
        return self.dfs(mp, s, d)
        
#{ 
#  Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    T=int(input())
    for i in range(T):
        n, m, s, d = input().split()
        n = int(n); m = int(m); s = int(s); d = int(d);
        edges = []
        for _ in range(m):
            x,y = input().split()
            x = int(x); y = int(y);
            edges.append([x,y])
        obj = Solution()
        ans = obj.possible_paths(edges, n, s, d)
        print(ans)


# } Driver Code Ends