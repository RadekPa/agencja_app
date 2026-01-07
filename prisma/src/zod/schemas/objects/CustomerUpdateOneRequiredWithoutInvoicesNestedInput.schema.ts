import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateWithoutInvoicesInputObjectSchema as CustomerCreateWithoutInvoicesInputObjectSchema } from './CustomerCreateWithoutInvoicesInput.schema';
import { CustomerUncheckedCreateWithoutInvoicesInputObjectSchema as CustomerUncheckedCreateWithoutInvoicesInputObjectSchema } from './CustomerUncheckedCreateWithoutInvoicesInput.schema';
import { CustomerCreateOrConnectWithoutInvoicesInputObjectSchema as CustomerCreateOrConnectWithoutInvoicesInputObjectSchema } from './CustomerCreateOrConnectWithoutInvoicesInput.schema';
import { CustomerUpsertWithoutInvoicesInputObjectSchema as CustomerUpsertWithoutInvoicesInputObjectSchema } from './CustomerUpsertWithoutInvoicesInput.schema';
import { CustomerWhereUniqueInputObjectSchema as CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerUpdateToOneWithWhereWithoutInvoicesInputObjectSchema as CustomerUpdateToOneWithWhereWithoutInvoicesInputObjectSchema } from './CustomerUpdateToOneWithWhereWithoutInvoicesInput.schema';
import { CustomerUpdateWithoutInvoicesInputObjectSchema as CustomerUpdateWithoutInvoicesInputObjectSchema } from './CustomerUpdateWithoutInvoicesInput.schema';
import { CustomerUncheckedUpdateWithoutInvoicesInputObjectSchema as CustomerUncheckedUpdateWithoutInvoicesInputObjectSchema } from './CustomerUncheckedUpdateWithoutInvoicesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerCreateWithoutInvoicesInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutInvoicesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutInvoicesInputObjectSchema).optional(),
  upsert: z.lazy(() => CustomerUpsertWithoutInvoicesInputObjectSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CustomerUpdateToOneWithWhereWithoutInvoicesInputObjectSchema), z.lazy(() => CustomerUpdateWithoutInvoicesInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutInvoicesInputObjectSchema)]).optional()
}).strict();
export const CustomerUpdateOneRequiredWithoutInvoicesNestedInputObjectSchema: z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutInvoicesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutInvoicesNestedInput>;
export const CustomerUpdateOneRequiredWithoutInvoicesNestedInputObjectZodSchema = makeSchema();
