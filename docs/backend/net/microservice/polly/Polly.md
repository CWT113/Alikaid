# Polly

## 基本概述

概念：Polly是一个 .NET **弹性**和**瞬态故障**处理库，允许开发人员以 Fluent 和线程安全的方式来实现**重试**、**熔断**、**超时**、**隔离**、**限流**和**降级**策略。

所谓弹性，指应对故障 Polly 的处理策略具有多样性和灵活性，各种策略之间可以灵活组合。

所谓瞬态故障，指故障不是必然会发生的，而是偶然的，比如偶尔网络波动出现的不稳定或无法访问的问题。



### 重试（Retry）

概念：指出现故障自动重试，这个是很常见的场景，如：当发生请求异常、网络错误、服务暂时不可用时，就会重试。

许多故障都是短暂性的，并且可能在短时间的延迟后可以自我恢复。



### 熔断（Circult-breaker）

概念：当系统遇到严重错误时，快速回馈失败比让用户等待要好，限制系统出错的体量，有助于系统恢复。

如：当我们调用一个第三方的 API，有很长一段时间 API 都没有响应，可能对方服务器瘫痪了，如果我们的系统还不停的重试，不仅会加重系统的负担，还可能会导致其他任务受影响。所以，当系统出错的次数超过了指定的**阈值**，就要中断当前线路，等待一段时间之后再重试。



### 超时（Timeout）

概念：当系统超过一定的等待时间，我们就几乎可以判断不可能会有成功的返回结果。

如：平时一个网络请求只需要200毫秒，现在有个请求耗时30秒还未完成，我们就知道大概率是不会返回成功的结果了。因此，我们需要设置系统的超时时间，避免长时间做无所谓的等待。



### 隔离（Bulkhead Isolation）

概念：当系统的一处出现故障时，可能促发多个失败的调用，很容易耗尽主机的资源。

如：下游系统出现故障可能导致上游的故障调用，甚至可能蔓延到整个系统的崩溃，所以要将可控的操作限制在一个固定大小的资源池中，以隔离潜在的可能相互影响的操作。



### 降级（Fallback）

概念：有些策略无法避免，就要有备用的方案。一般情况下，当无法避免的错误发生时，我们要有一个合理的返回来替代失败。



### 策略包（Policy Wrap）

概念：一种操作会有多种不同的故障，而不同的故障处理需要有不同的策略，策略之间的组合，就叫做策略包。



## 基本使用

安装包：`Microsoft.Extensions.Http.Polly`



具体的测试案例，请看 github 仓库，里面的案例很详细：

[github.com](https://github.com/CWT113/CWT113-ASP.NET.Core.Template/tree/main/ASP.NET Core for Polly)
