import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblClients_obsoleteWhereUniqueInputObjectSchema as tblClients_obsoleteWhereUniqueInputObjectSchema } from './tblClients_obsoleteWhereUniqueInput.schema';
import { tblClients_obsoleteCreateWithoutDictRepModesInputObjectSchema as tblClients_obsoleteCreateWithoutDictRepModesInputObjectSchema } from './tblClients_obsoleteCreateWithoutDictRepModesInput.schema';
import { tblClients_obsoleteUncheckedCreateWithoutDictRepModesInputObjectSchema as tblClients_obsoleteUncheckedCreateWithoutDictRepModesInputObjectSchema } from './tblClients_obsoleteUncheckedCreateWithoutDictRepModesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblClients_obsoleteWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblClients_obsoleteCreateWithoutDictRepModesInputObjectSchema), z.lazy(() => tblClients_obsoleteUncheckedCreateWithoutDictRepModesInputObjectSchema)])
}).strict();
export const tblClients_obsoleteCreateOrConnectWithoutDictRepModesInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteCreateOrConnectWithoutDictRepModesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteCreateOrConnectWithoutDictRepModesInput>;
export const tblClients_obsoleteCreateOrConnectWithoutDictRepModesInputObjectZodSchema = makeSchema();
