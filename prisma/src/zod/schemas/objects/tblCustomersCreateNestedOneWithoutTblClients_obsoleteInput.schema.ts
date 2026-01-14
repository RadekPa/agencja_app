import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutTblClients_obsoleteInputObjectSchema as tblCustomersCreateWithoutTblClients_obsoleteInputObjectSchema } from './tblCustomersCreateWithoutTblClients_obsoleteInput.schema';
import { tblCustomersUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema as tblCustomersUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblClients_obsoleteInput.schema';
import { tblCustomersCreateOrConnectWithoutTblClients_obsoleteInputObjectSchema as tblCustomersCreateOrConnectWithoutTblClients_obsoleteInputObjectSchema } from './tblCustomersCreateOrConnectWithoutTblClients_obsoleteInput.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblClients_obsoleteInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblCustomersCreateOrConnectWithoutTblClients_obsoleteInputObjectSchema).optional(),
  connect: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblCustomersCreateNestedOneWithoutTblClients_obsoleteInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateNestedOneWithoutTblClients_obsoleteInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateNestedOneWithoutTblClients_obsoleteInput>;
export const tblCustomersCreateNestedOneWithoutTblClients_obsoleteInputObjectZodSchema = makeSchema();
