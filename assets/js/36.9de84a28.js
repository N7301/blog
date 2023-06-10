(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{371:function(s,a,n){"use strict";n.r(a);var t=n(4),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("参考：")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://time.geekbang.org/column/intro/100056701?tab=catalog9",target:"_blank",rel:"noopener noreferrer"}},[s._v("31 事务机制：Redis能实现ACID属性吗？| 极客时间"),a("OutboundLink")],1)])])]),s._v(" "),a("h2",{attrs:{id:"_1-事务机制-redis-能实现-acid-属性吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-事务机制-redis-能实现-acid-属性吗"}},[s._v("#")]),s._v(" 1. 事务机制：Redis 能实现 ACID 属性吗？")]),s._v(" "),a("p",[s._v("事务提供了对数据读写的 ACID 的保证，那 Redis 可以完全保证 ACID 属性吗？")]),s._v(" "),a("h3",{attrs:{id:"_1-1-acid-属性的要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-acid-属性的要求"}},[s._v("#")]),s._v(" 1.1 ACID 属性的要求")]),s._v(" "),a("p",[s._v("可以参考 "),a("a",{attrs:{href:"https://yubincloud.github.io/notebook/pages/DDIA/note/transaction/",target:"_blank",rel:"noopener noreferrer"}},[s._v("事务"),a("OutboundLink")],1),s._v(" 这一篇文章。")]),s._v(" "),a("h3",{attrs:{id:"_1-2-redis-如何实现事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-redis-如何实现事务"}},[s._v("#")]),s._v(" 1.2 Redis 如何实现事务？")]),s._v(" "),a("p",[s._v("事务的执行过程包含三个步骤，Redis 提供了 MULTI、EXEC 两个命令来完成这三个步骤。下面看一下：")]),s._v(" "),a("ol",[a("li",[a("font",{attrs:{color:"blue"}},[s._v("第一步")]),s._v("：客户端要使用 "),a("mark",[s._v("MULTI 命令")]),s._v("来显式地表示一个事务的开启。")],1),s._v(" "),a("li",[a("font",{attrs:{color:"blue"}},[s._v("第二步")]),s._v("：客户端把事务本身要执行的具体操作（例如增删改数据）发送给服务器端。这些操作就是 Redis 本身提供的数据读写命令，例如 GET、SET 等。不过，这些命令虽然被客户端发送到了服务器端，但 Redis 实例只是把这些命令暂存到一个命令队列中，并不会立即执行。")],1),s._v(" "),a("li",[a("font",{attrs:{color:"blue"}},[s._v("第三步")]),s._v("：客户端向 Redis 发送 "),a("mark",[s._v("EXEC 命令")]),s._v("来执行事务提交，让数据库"),a("strong",[s._v("实际执行")]),s._v("第二步中发送的具体操作。")],1)]),s._v(" "),a("p",[s._v("如下代码是使用 MULTI 和 EXEC 执行一个事务的过程：")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("# 开启事务\n127.0.0.1:6379> MULTI\nOK\n# 将a:stock减1，\n127.0.0.1:6379> DECR a:stock\nQUEUED\n# 将b:stock减1\n127.0.0.1:6379> DECR b:stock\nQUEUED\n# 实际执行事务\n127.0.0.1:6379> EXEC\n1) (integer) 4\n2) (integer) 9\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("好了，通过使用 MULTI 和 EXEC 命令，我们可以实现多个操作的共同执行，但是这符合事务要求的 ACID 属性吗？")]),s._v(" "),a("h3",{attrs:{id:"_1-3-redis-的事务机制能保证哪些属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-redis-的事务机制能保证哪些属性"}},[s._v("#")]),s._v(" 1.3 Redis 的事务机制能保证哪些属性？")]),s._v(" "),a("p",[s._v("这里分别分析一下。")]),s._v(" "),a("h4",{attrs:{id:"_1-3-1-原子性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-原子性"}},[s._v("#")]),s._v(" 1.3.1 原子性")]),s._v(" "),a("p",[s._v("如果事务执行出现错误，原子性还能保证吗？这要分三种情况来看待。")]),s._v(" "),a("ul",[a("li",[s._v("第一种情况是，"),a("strong",[s._v("在执行EXEC命令前，客户端发送的操作命令本身就有错误")]),s._v("（比如语法错误，使用了不存在的命令），在命令入队时就被 Redis 实例判断出来了。此时 Redis 会拒绝执行所有提交的命令，从而保证了原子性。\n"),a("ul",[a("li",[s._v("例子：")])])])]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("#开启事务\n127.0.0.1:6379> MULTI\nOK\n#发送事务中的第一个操作，但是Redis不支持该命令，返回报错信息\n127.0.0.1:6379> PUT a:stock 5\n(error) ERR unknown command `PUT`, with args beginning with: `a:stock`, `5`,\n#发送事务中的第二个操作，这个操作是正确的命令，Redis把该命令入队\n127.0.0.1:6379> DECR b:stock\nQUEUED\n#实际执行事务，但是之前命令有错误，所以Redis拒绝执行\n127.0.0.1:6379> EXEC\n(error) EXECABORT Transaction discarded because of previous errors.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("ul",[a("li",[s._v("第二种情况是，"),a("strong",[s._v("某个命令在事务执行期间出现错误")]),s._v("，如命令和操作的数据类型不匹配，在操作入队时没有被 Redis 实例检查出错误。这时尽管 Redis 会对单个命令报错，但还是会把这个事务接下来的所有命令执行完。在这种情况下，事务的原子性就无法得到保证了。\n"),a("ul",[a("li",[s._v("例子：")])])])]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("#开启事务\n127.0.0.1:6379> MULTI\nOK\n#发送事务中的第一个操作，LPOP命令操作的数据类型不匹配，此时并不报错\n127.0.0.1:6379> LPOP a:stock\nQUEUED\n#发送事务中的第二个操作\n127.0.0.1:6379> DECR b:stock\nQUEUED\n#实际执行事务，事务第一个操作执行报错\n127.0.0.1:6379> EXEC\n1) (error) WRONGTYPE Operation against a key holding the wrong kind of value\n2) (integer) 8\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("ul",[a("li",[s._v("第三种情况是，"),a("strong",[s._v("事务执行期间 Redis 实例发生了故障，导致事务执行失败")]),s._v("。在这种情况下：\n"),a("ul",[a("li",[s._v("如果Redis开启了AOF日志，那么，只会有部分的事务操作被记录到AOF日志中。我们需要使用redis-check-aof工具检查AOF日志文件，这个工具可以把未完成的事务操作从AOF文件中去除。这样一来，我们使用AOF恢复实例后，事务操作不会再被执行，从而保证了原子性。")]),s._v(" "),a("li",[s._v("如果AOF日志并没有开启，那么实例重启后，数据也都没法恢复了，此时，也就谈不上原子性了。")])])])]),s._v(" "),a("p",[a("strong",[s._v("Redis 也没有提供回滚机制")]),s._v("。虽然 Redis 提供了 "),a("mark",[s._v("DISCARD 命令")]),s._v("，但这个命令只能用来"),a("u",[s._v("主动放弃")]),s._v("事务的执行，把暂存的命令队列清空，起不到回滚的效果。下面代码展示 DISCARD 命令的使用：")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v('#读取a:stock的值4\n127.0.0.1:6379> GET a:stock\n"4"\n#开启事务\n127.0.0.1:6379> MULTI\nOK\n#发送事务的第一个操作，对a:stock减1\n127.0.0.1:6379> DECR a:stock\nQUEUED\n#执行DISCARD命令，主动放弃事务\n127.0.0.1:6379> DISCARD\nOK\n#再次读取a:stock的值，值没有被修改\n127.0.0.1:6379> GET a:stock\n"4"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("这里总结一下 Redis 对事务原子性的保证情况：")]),s._v(" "),a("ul",[a("li",[s._v("命令入队时就报错，会放弃事务执行，保证原子性；")]),s._v(" "),a("li",[s._v("命令入队时没报错，实际执行时报错，不保证原子性；")]),s._v(" "),a("li",[s._v("EXEC 命令执行时实例故障，如果开启了 AOF 日志，可以保证原子性。")])]),s._v(" "),a("h4",{attrs:{id:"_1-3-2-一致性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-一致性"}},[s._v("#")]),s._v(" 1.3.2 一致性")]),s._v(" "),a("p",[s._v("我们按照命令出错和实例故障的发生时机，分成三种情况来看：")]),s._v(" "),a("ol",[a("li",[s._v("情况一："),a("strong",[s._v("命令入队时就报错")]),s._v("。在这种情况下，事务本身就会被放弃执行，所以可以保证数据库的一致性。")]),s._v(" "),a("li",[s._v("情况二："),a("strong",[s._v("命令入队时没报错，实际执行时报错")]),s._v("。在这种情况下，有错误的命令不会被执行，正确的命令可以正常执行，也不会改变数据库的一致性。")]),s._v(" "),a("li",[s._v("情况三："),a("strong",[s._v("EXEC 命令执行时实例发生故障")]),s._v("。在这种情况下，实例故障后会进行重启，这就和数据恢复的方式有关了，我们要根据实例是否开启了RDB或AOF来分情况讨论下。\n"),a("ul",[a("li",[s._v("若没有开启 RDB 或 AOF 日志：那实例故障重启后，数据都没有了，数据库是一致的。")]),s._v(" "),a("li",[s._v("若使用了 RDB 快照：因为RDB快照不会在事务执行时执行，所以，事务命令操作的结果不会被保存到 RDB 快照中，使用 RDB 快照进行恢复时，数据库里的数据也是一致的。")]),s._v(" "),a("li",[s._v("若使用了 AOF 日志：\n"),a("ul",[a("li",[s._v("如果事务操作还没有被记录到AOF日志时，实例就发生了故障，那么，使用AOF日志恢复的数据库数据是一致的。")]),s._v(" "),a("li",[s._v("如果只有部分操作被记录到了AOF日志，我们可以使用redis-check-aof清除事务中已经完成的操作，数据库恢复后也是一致的。")])])])])])]),s._v(" "),a("p",[s._v("所以，"),a("strong",[s._v("总结来说，在命令执行错误或 Redis 发生故障的情况下，Redis 事务机制对一致性属性是有保证的")]),s._v("。")]),s._v(" "),a("h4",{attrs:{id:"_1-3-3-隔离性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-隔离性"}},[s._v("#")]),s._v(" 1.3.3 隔离性")]),s._v(" "),a("p",[s._v("事务的隔离性保证，会受到和事务一起执行的并发操作的影响。而事务执行又可以分成命令入队（EXEC 命令执行前）和命令实际执行（EXEC 命令执行后）两个阶段，所以，我们就针对这两个阶段，分成两种情况来分析：")]),s._v(" "),a("ol",[a("li",[s._v("并发操作在 EXEC 命令前执行，此时，隔离性的保证要使用 WATCH 机制来实现，否则隔离性无法保证；")]),s._v(" "),a("li",[s._v("并发操作在 EXEC 命令后执行，此时，隔离性可以保证。")])]),s._v(" "),a("p",[s._v("我们先来看第一种情况。一个事务的 EXEC 命令还没有执行时，事务的命令操作是暂存在命令队列中的。此时，如果有其它的并发操作，我们就需要看事务是否使用了 WATCH 机制。")]),s._v(" "),a("p",[a("mark",[s._v("WATCH 机制")]),s._v("的作用是，在事务执行前，监控一个或多个键的值变化情况，当事务调用 EXEC 命令执行时，WATCH 机制会先检查监控的键是否被其它客户端修改了。如果修改了，就放弃事务执行，避免事务的隔离性被破坏。然后，客户端可以再次执行事务，此时，如果没有并发修改事务数据的操作了，事务就能正常执行，隔离性也得到了保证。")]),s._v(" "),a("p",[s._v("WATCH机制的具体实现是由WATCH命令实现的，我给你举个例子，你可以看下下面的图，进一步理解下WATCH命令的使用：")]),s._v(" "),a("center",[a("img",{staticStyle:{zoom:"75%"},attrs:{src:"https://blog-1310567564.cos.ap-beijing.myqcloud.com/img/20230419102445.png",alt:"$uploadName"}})]),s._v(" "),a("p",[s._v("当然，如果没有使用WATCH机制，在EXEC命令前执行的并发操作是会对数据进行读写的。而且，在执行EXEC命令的时候，事务要操作的数据已经改变了，在这种情况下，Redis并没有做到让事务对其它操作隔离，隔离性也就没有得到保障。下面这张图显示了没有WATCH机制时的情况：")]),s._v(" "),a("center",[a("img",{staticStyle:{zoom:"75%"},attrs:{src:"https://blog-1310567564.cos.ap-beijing.myqcloud.com/img/20230419102509.png",alt:"$uploadName"}})]),s._v(" "),a("p",[s._v("对于第二种情况，因为 Redis 是用单线程执行命令，而且，"),a("strong",[s._v("EXEC 命令执行后，Redis 会保证先把命令队列中的所有命令执行完")]),s._v("。所以，在这种情况下，并发操作不会破坏事务的隔离性，如下图所示：")]),s._v(" "),a("center",[a("img",{staticStyle:{zoom:"75%"},attrs:{src:"https://blog-1310567564.cos.ap-beijing.myqcloud.com/img/20230419102522.png",alt:"$uploadName"}})]),s._v(" "),a("h4",{attrs:{id:"_1-3-4-持久性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-4-持久性"}},[s._v("#")]),s._v(" 1.3.4 持久性")]),s._v(" "),a("p",[s._v("因为 Redis 是内存数据库，所以，数据是否持久化保存完全取决于 Redis 的持久化配置模式。")]),s._v(" "),a("p",[s._v("如果Redis没有使用RDB或AOF，那么事务的持久化属性肯定得不到保证。如果Redis使用了RDB模式，那么，在一个事务执行后，而下一次的RDB快照还未执行前，如果发生了实例宕机，这种情况下，事务修改的数据也是不能保证持久化的。")]),s._v(" "),a("p",[s._v("如果Redis采用了AOF模式，因为AOF模式的三种配置选项no、everysec和always都会存在数据丢失的情况，所以，事务的持久性属性也还是得不到保证。")]),s._v(" "),a("p",[s._v("所以，"),a("strong",[s._v("不管 Redis 采用什么持久化模式，事务的持久性属性是得不到保证的")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"_1-4-小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-小结"}},[s._v("#")]),s._v(" 1.4 小结")]),s._v(" "),a("p",[s._v("这一节学习了 Redis 的事务实现，它通过 MULTI、EXEC、DISCARD 和 WATCH 四个命令来支持事务机制，总结如下：")]),s._v(" "),a("center",[a("img",{staticStyle:{zoom:"75%"},attrs:{src:"https://blog-1310567564.cos.ap-beijing.myqcloud.com/img/20230419102816.png",alt:"$uploadName"}})]),s._v(" "),a("p",[s._v("事务的ACID属性是我们使用事务进行正确操作的基本要求。通过这节课的分析，我们了解到了，Redis的事务机制可以保证一致性和隔离性，但是无法保证持久性。不过，因为Redis本身是内存数据库，持久性并不是一个必须的属性，我们更加关注的还是原子性、一致性和隔离性这三个属性。")]),s._v(" "),a("p",[s._v("原子性的情况比较复杂，只有当事务中使用的命令语法有误时，原子性得不到保证，在其它情况下，事务都可以原子性执行。")]),s._v(" "),a("p",[s._v("建议："),a("font",{attrs:{color:"blue"}},[s._v("严格按照 Redis 的命令规范进行程序开发，并且通过 code review 确保命令的正确性")]),s._v("。这样一来，Redis 的事务机制就能被应用在实践中，保证多操作的正确执行。")],1)],1)}),[],!1,null,null,null);a.default=e.exports}}]);