import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './tblSubmissionsWhereUniqueInput.schema';
import { tblSubmissionsCreateWithoutDictCopyTypeInputObjectSchema as tblSubmissionsCreateWithoutDictCopyTypeInputObjectSchema } from './tblSubmissionsCreateWithoutDictCopyTypeInput.schema';
import { tblSubmissionsUncheckedCreateWithoutDictCopyTypeInputObjectSchema as tblSubmissionsUncheckedCreateWithoutDictCopyTypeInputObjectSchema } from './tblSubmissionsUncheckedCreateWithoutDictCopyTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblSubmissionsCreateWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedCreateWithoutDictCopyTypeInputObjectSchema)])
}).strict();
export const tblSubmissionsCreateOrConnectWithoutDictCopyTypeInputObjectSchema: z.ZodType<Prisma.tblSubmissionsCreateOrConnectWithoutDictCopyTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsCreateOrConnectWithoutDictCopyTypeInput>;
export const tblSubmissionsCreateOrConnectWithoutDictCopyTypeInputObjectZodSchema = makeSchema();
