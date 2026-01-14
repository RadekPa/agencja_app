import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './tblSubmissionsWhereUniqueInput.schema';
import { tblSubmissionsCreateWithoutDictSubmSentTypeInputObjectSchema as tblSubmissionsCreateWithoutDictSubmSentTypeInputObjectSchema } from './tblSubmissionsCreateWithoutDictSubmSentTypeInput.schema';
import { tblSubmissionsUncheckedCreateWithoutDictSubmSentTypeInputObjectSchema as tblSubmissionsUncheckedCreateWithoutDictSubmSentTypeInputObjectSchema } from './tblSubmissionsUncheckedCreateWithoutDictSubmSentTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblSubmissionsCreateWithoutDictSubmSentTypeInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedCreateWithoutDictSubmSentTypeInputObjectSchema)])
}).strict();
export const tblSubmissionsCreateOrConnectWithoutDictSubmSentTypeInputObjectSchema: z.ZodType<Prisma.tblSubmissionsCreateOrConnectWithoutDictSubmSentTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsCreateOrConnectWithoutDictSubmSentTypeInput>;
export const tblSubmissionsCreateOrConnectWithoutDictSubmSentTypeInputObjectZodSchema = makeSchema();
