import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateWithoutSimpleInvoicesInputObjectSchema as CustomerCreateWithoutSimpleInvoicesInputObjectSchema } from './CustomerCreateWithoutSimpleInvoicesInput.schema';
import { CustomerUncheckedCreateWithoutSimpleInvoicesInputObjectSchema as CustomerUncheckedCreateWithoutSimpleInvoicesInputObjectSchema } from './CustomerUncheckedCreateWithoutSimpleInvoicesInput.schema';
import { CustomerCreateOrConnectWithoutSimpleInvoicesInputObjectSchema as CustomerCreateOrConnectWithoutSimpleInvoicesInputObjectSchema } from './CustomerCreateOrConnectWithoutSimpleInvoicesInput.schema';
import { CustomerUpsertWithoutSimpleInvoicesInputObjectSchema as CustomerUpsertWithoutSimpleInvoicesInputObjectSchema } from './CustomerUpsertWithoutSimpleInvoicesInput.schema';
import { CustomerWhereInputObjectSchema as CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';
import { CustomerWhereUniqueInputObjectSchema as CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerUpdateToOneWithWhereWithoutSimpleInvoicesInputObjectSchema as CustomerUpdateToOneWithWhereWithoutSimpleInvoicesInputObjectSchema } from './CustomerUpdateToOneWithWhereWithoutSimpleInvoicesInput.schema';
import { CustomerUpdateWithoutSimpleInvoicesInputObjectSchema as CustomerUpdateWithoutSimpleInvoicesInputObjectSchema } from './CustomerUpdateWithoutSimpleInvoicesInput.schema';
import { CustomerUncheckedUpdateWithoutSimpleInvoicesInputObjectSchema as CustomerUncheckedUpdateWithoutSimpleInvoicesInputObjectSchema } from './CustomerUncheckedUpdateWithoutSimpleInvoicesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerCreateWithoutSimpleInvoicesInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutSimpleInvoicesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutSimpleInvoicesInputObjectSchema).optional(),
  upsert: z.lazy(() => CustomerUpsertWithoutSimpleInvoicesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => CustomerWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => CustomerWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CustomerUpdateToOneWithWhereWithoutSimpleInvoicesInputObjectSchema), z.lazy(() => CustomerUpdateWithoutSimpleInvoicesInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutSimpleInvoicesInputObjectSchema)]).optional()
}).strict();
export const CustomerUpdateOneWithoutSimpleInvoicesNestedInputObjectSchema: z.ZodType<Prisma.CustomerUpdateOneWithoutSimpleInvoicesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateOneWithoutSimpleInvoicesNestedInput>;
export const CustomerUpdateOneWithoutSimpleInvoicesNestedInputObjectZodSchema = makeSchema();
