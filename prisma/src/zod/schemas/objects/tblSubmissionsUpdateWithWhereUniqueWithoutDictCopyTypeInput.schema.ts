import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './tblSubmissionsWhereUniqueInput.schema';
import { tblSubmissionsUpdateWithoutDictCopyTypeInputObjectSchema as tblSubmissionsUpdateWithoutDictCopyTypeInputObjectSchema } from './tblSubmissionsUpdateWithoutDictCopyTypeInput.schema';
import { tblSubmissionsUncheckedUpdateWithoutDictCopyTypeInputObjectSchema as tblSubmissionsUncheckedUpdateWithoutDictCopyTypeInputObjectSchema } from './tblSubmissionsUncheckedUpdateWithoutDictCopyTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblSubmissionsUpdateWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedUpdateWithoutDictCopyTypeInputObjectSchema)])
}).strict();
export const tblSubmissionsUpdateWithWhereUniqueWithoutDictCopyTypeInputObjectSchema: z.ZodType<Prisma.tblSubmissionsUpdateWithWhereUniqueWithoutDictCopyTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsUpdateWithWhereUniqueWithoutDictCopyTypeInput>;
export const tblSubmissionsUpdateWithWhereUniqueWithoutDictCopyTypeInputObjectZodSchema = makeSchema();
