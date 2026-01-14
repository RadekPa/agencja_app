import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersCreateWithoutTblClients_obsoleteInputObjectSchema as tblCustomersCreateWithoutTblClients_obsoleteInputObjectSchema } from './tblCustomersCreateWithoutTblClients_obsoleteInput.schema';
import { tblCustomersUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema as tblCustomersUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblClients_obsoleteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblClients_obsoleteInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema)])
}).strict();
export const tblCustomersCreateOrConnectWithoutTblClients_obsoleteInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutTblClients_obsoleteInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutTblClients_obsoleteInput>;
export const tblCustomersCreateOrConnectWithoutTblClients_obsoleteInputObjectZodSchema = makeSchema();
