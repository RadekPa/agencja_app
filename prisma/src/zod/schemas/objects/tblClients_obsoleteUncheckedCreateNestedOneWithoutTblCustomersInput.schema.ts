import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblClients_obsoleteCreateWithoutTblCustomersInputObjectSchema as tblClients_obsoleteCreateWithoutTblCustomersInputObjectSchema } from './tblClients_obsoleteCreateWithoutTblCustomersInput.schema';
import { tblClients_obsoleteUncheckedCreateWithoutTblCustomersInputObjectSchema as tblClients_obsoleteUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblClients_obsoleteUncheckedCreateWithoutTblCustomersInput.schema';
import { tblClients_obsoleteCreateOrConnectWithoutTblCustomersInputObjectSchema as tblClients_obsoleteCreateOrConnectWithoutTblCustomersInputObjectSchema } from './tblClients_obsoleteCreateOrConnectWithoutTblCustomersInput.schema';
import { tblClients_obsoleteWhereUniqueInputObjectSchema as tblClients_obsoleteWhereUniqueInputObjectSchema } from './tblClients_obsoleteWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblClients_obsoleteCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblClients_obsoleteUncheckedCreateWithoutTblCustomersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblClients_obsoleteCreateOrConnectWithoutTblCustomersInputObjectSchema).optional(),
  connect: z.lazy(() => tblClients_obsoleteWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblClients_obsoleteUncheckedCreateNestedOneWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteUncheckedCreateNestedOneWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteUncheckedCreateNestedOneWithoutTblCustomersInput>;
export const tblClients_obsoleteUncheckedCreateNestedOneWithoutTblCustomersInputObjectZodSchema = makeSchema();
