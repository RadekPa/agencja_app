import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblClients_obsoleteWhereUniqueInputObjectSchema as tblClients_obsoleteWhereUniqueInputObjectSchema } from './tblClients_obsoleteWhereUniqueInput.schema';
import { tblClients_obsoleteCreateWithoutTblCustomersInputObjectSchema as tblClients_obsoleteCreateWithoutTblCustomersInputObjectSchema } from './tblClients_obsoleteCreateWithoutTblCustomersInput.schema';
import { tblClients_obsoleteUncheckedCreateWithoutTblCustomersInputObjectSchema as tblClients_obsoleteUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblClients_obsoleteUncheckedCreateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblClients_obsoleteWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblClients_obsoleteCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblClients_obsoleteUncheckedCreateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblClients_obsoleteCreateOrConnectWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteCreateOrConnectWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteCreateOrConnectWithoutTblCustomersInput>;
export const tblClients_obsoleteCreateOrConnectWithoutTblCustomersInputObjectZodSchema = makeSchema();
