import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateWithoutSimpleInvoicesAsBillToInputObjectSchema as CustomerCreateWithoutSimpleInvoicesAsBillToInputObjectSchema } from './CustomerCreateWithoutSimpleInvoicesAsBillToInput.schema';
import { CustomerUncheckedCreateWithoutSimpleInvoicesAsBillToInputObjectSchema as CustomerUncheckedCreateWithoutSimpleInvoicesAsBillToInputObjectSchema } from './CustomerUncheckedCreateWithoutSimpleInvoicesAsBillToInput.schema';
import { CustomerCreateOrConnectWithoutSimpleInvoicesAsBillToInputObjectSchema as CustomerCreateOrConnectWithoutSimpleInvoicesAsBillToInputObjectSchema } from './CustomerCreateOrConnectWithoutSimpleInvoicesAsBillToInput.schema';
import { CustomerUpsertWithoutSimpleInvoicesAsBillToInputObjectSchema as CustomerUpsertWithoutSimpleInvoicesAsBillToInputObjectSchema } from './CustomerUpsertWithoutSimpleInvoicesAsBillToInput.schema';
import { CustomerWhereUniqueInputObjectSchema as CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerUpdateToOneWithWhereWithoutSimpleInvoicesAsBillToInputObjectSchema as CustomerUpdateToOneWithWhereWithoutSimpleInvoicesAsBillToInputObjectSchema } from './CustomerUpdateToOneWithWhereWithoutSimpleInvoicesAsBillToInput.schema';
import { CustomerUpdateWithoutSimpleInvoicesAsBillToInputObjectSchema as CustomerUpdateWithoutSimpleInvoicesAsBillToInputObjectSchema } from './CustomerUpdateWithoutSimpleInvoicesAsBillToInput.schema';
import { CustomerUncheckedUpdateWithoutSimpleInvoicesAsBillToInputObjectSchema as CustomerUncheckedUpdateWithoutSimpleInvoicesAsBillToInputObjectSchema } from './CustomerUncheckedUpdateWithoutSimpleInvoicesAsBillToInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerCreateWithoutSimpleInvoicesAsBillToInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutSimpleInvoicesAsBillToInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutSimpleInvoicesAsBillToInputObjectSchema).optional(),
  upsert: z.lazy(() => CustomerUpsertWithoutSimpleInvoicesAsBillToInputObjectSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CustomerUpdateToOneWithWhereWithoutSimpleInvoicesAsBillToInputObjectSchema), z.lazy(() => CustomerUpdateWithoutSimpleInvoicesAsBillToInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutSimpleInvoicesAsBillToInputObjectSchema)]).optional()
}).strict();
export const CustomerUpdateOneRequiredWithoutSimpleInvoicesAsBillToNestedInputObjectSchema: z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutSimpleInvoicesAsBillToNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutSimpleInvoicesAsBillToNestedInput>;
export const CustomerUpdateOneRequiredWithoutSimpleInvoicesAsBillToNestedInputObjectZodSchema = makeSchema();
