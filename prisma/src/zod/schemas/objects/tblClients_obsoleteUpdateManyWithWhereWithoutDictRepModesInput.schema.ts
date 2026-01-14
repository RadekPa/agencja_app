import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblClients_obsoleteScalarWhereInputObjectSchema as tblClients_obsoleteScalarWhereInputObjectSchema } from './tblClients_obsoleteScalarWhereInput.schema';
import { tblClients_obsoleteUpdateManyMutationInputObjectSchema as tblClients_obsoleteUpdateManyMutationInputObjectSchema } from './tblClients_obsoleteUpdateManyMutationInput.schema';
import { tblClients_obsoleteUncheckedUpdateManyWithoutDictRepModesInputObjectSchema as tblClients_obsoleteUncheckedUpdateManyWithoutDictRepModesInputObjectSchema } from './tblClients_obsoleteUncheckedUpdateManyWithoutDictRepModesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblClients_obsoleteScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblClients_obsoleteUpdateManyMutationInputObjectSchema), z.lazy(() => tblClients_obsoleteUncheckedUpdateManyWithoutDictRepModesInputObjectSchema)])
}).strict();
export const tblClients_obsoleteUpdateManyWithWhereWithoutDictRepModesInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteUpdateManyWithWhereWithoutDictRepModesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteUpdateManyWithWhereWithoutDictRepModesInput>;
export const tblClients_obsoleteUpdateManyWithWhereWithoutDictRepModesInputObjectZodSchema = makeSchema();
