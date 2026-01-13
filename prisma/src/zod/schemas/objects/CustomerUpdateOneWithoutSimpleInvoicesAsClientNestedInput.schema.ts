import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateWithoutSimpleInvoicesAsClientInputObjectSchema as CustomerCreateWithoutSimpleInvoicesAsClientInputObjectSchema } from './CustomerCreateWithoutSimpleInvoicesAsClientInput.schema';
import { CustomerUncheckedCreateWithoutSimpleInvoicesAsClientInputObjectSchema as CustomerUncheckedCreateWithoutSimpleInvoicesAsClientInputObjectSchema } from './CustomerUncheckedCreateWithoutSimpleInvoicesAsClientInput.schema';
import { CustomerCreateOrConnectWithoutSimpleInvoicesAsClientInputObjectSchema as CustomerCreateOrConnectWithoutSimpleInvoicesAsClientInputObjectSchema } from './CustomerCreateOrConnectWithoutSimpleInvoicesAsClientInput.schema';
import { CustomerUpsertWithoutSimpleInvoicesAsClientInputObjectSchema as CustomerUpsertWithoutSimpleInvoicesAsClientInputObjectSchema } from './CustomerUpsertWithoutSimpleInvoicesAsClientInput.schema';
import { CustomerWhereInputObjectSchema as CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';
import { CustomerWhereUniqueInputObjectSchema as CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerUpdateToOneWithWhereWithoutSimpleInvoicesAsClientInputObjectSchema as CustomerUpdateToOneWithWhereWithoutSimpleInvoicesAsClientInputObjectSchema } from './CustomerUpdateToOneWithWhereWithoutSimpleInvoicesAsClientInput.schema';
import { CustomerUpdateWithoutSimpleInvoicesAsClientInputObjectSchema as CustomerUpdateWithoutSimpleInvoicesAsClientInputObjectSchema } from './CustomerUpdateWithoutSimpleInvoicesAsClientInput.schema';
import { CustomerUncheckedUpdateWithoutSimpleInvoicesAsClientInputObjectSchema as CustomerUncheckedUpdateWithoutSimpleInvoicesAsClientInputObjectSchema } from './CustomerUncheckedUpdateWithoutSimpleInvoicesAsClientInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerCreateWithoutSimpleInvoicesAsClientInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutSimpleInvoicesAsClientInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutSimpleInvoicesAsClientInputObjectSchema).optional(),
  upsert: z.lazy(() => CustomerUpsertWithoutSimpleInvoicesAsClientInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => CustomerWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => CustomerWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CustomerUpdateToOneWithWhereWithoutSimpleInvoicesAsClientInputObjectSchema), z.lazy(() => CustomerUpdateWithoutSimpleInvoicesAsClientInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutSimpleInvoicesAsClientInputObjectSchema)]).optional()
}).strict();
export const CustomerUpdateOneWithoutSimpleInvoicesAsClientNestedInputObjectSchema: z.ZodType<Prisma.CustomerUpdateOneWithoutSimpleInvoicesAsClientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateOneWithoutSimpleInvoicesAsClientNestedInput>;
export const CustomerUpdateOneWithoutSimpleInvoicesAsClientNestedInputObjectZodSchema = makeSchema();
